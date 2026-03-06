import Map "mo:core/Map";
import Array "mo:core/Array";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Text "mo:core/Text";
import Time "mo:core/Time";
import Order "mo:core/Order";

actor {
  type ContactSubmission = {
    id : Nat;
    name : Text;
    email : Text;
    message : Text;
    timestamp : Time.Time;
  };

  module ContactSubmission {
    public func compareByTimestamp(a : ContactSubmission, b : ContactSubmission) : Order.Order {
      Nat.compare(a.id, b.id);
    };
  };

  let submissions = Map.empty<Nat, ContactSubmission>();
  var nextId = 0;

  func isValidEmail(email : Text) : Bool {
    email.contains(#char('@'));
  };

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, message : Text) : async () {
    if (name.isEmpty() or email.isEmpty() or message.isEmpty()) {
      Runtime.trap("All fields must be filled.");
    };
    if (not isValidEmail(email)) {
      Runtime.trap("Invalid email format.");
    };

    let submission : ContactSubmission = {
      id = nextId;
      name;
      email;
      message;
      timestamp = Time.now();
    };

    submissions.add(nextId, submission);
    nextId += 1;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    submissions.values().toArray().sort(ContactSubmission.compareByTimestamp);
  };
};
