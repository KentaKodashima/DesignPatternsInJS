# Behavioral Patterns

## Observer pattern
The Observer is a design pattern where an object (known as a subject) maintains a list of objects depending on it (observers), automatically notifying them of any changes to state. It emits a bunch of events to its observers to notify the changes when they happen.

### Motivation
- We need to be informed when certain things happen
  - Objects's property changes
  - Object does something
  - Some external event occurs
- We want to listen to events and be notified when they occur
  - Notifications should include useful data
- Want to unsubscribe from events if we're no longer interested

### Terms
- Subject: maintains a list of observers, facilitates adding or removing observers
- Observer: provides an update interface for objects that need to be notified of a Subject's changes of state.
- Observable: The entity gethering the events
- ConcreteSubject: broadcasts notifications to observers on changes of state, stores the state of ConcreteObservers
- ConcreteObserver: stores a reference to the ConcreteSubject, implements an update interface for the Observer to ensure state is consistent with the Subject's