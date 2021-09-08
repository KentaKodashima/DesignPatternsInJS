# SOLID Design Principles

## Single Responsibility Principle
The idea of sinfle responsibility principle is that a class has to have just one responsibility to avoid having a class with a massive spagetti code. So, instead of adding a second responsibility to an existing class, you just add another class for the responsibility.

- A class should only have one reason to change
- Separation of concerns - different classes handling different, independent tasks/problems

## Open-Closed Principle
The idea of open-closed principle is that classes are open for extension, but closed for modification. You won't modify a existing class unless you have to.

Usually, we should use inheritence by having a base class and extending other classes. However, in JS, the code runs without an error even if the extended class doesn't meet the requirements from the base class. The missing requirements will become just null.

- Classes should be open for extension but closed for modification

## Liskov Substitution Principle
The idea that methonds or functions that take the base type should also equally be able to take the derived type (inheritors) without breaking the functionality.

- You should be able to substitute a base type for a subtype

## Interface Segregation Principle
The goal of the Interface Segregation Principle is to reduce the side effects and frequency of required changes by splitting the software into multiple, independent parts. This is only achievable if you define your interfaces so that they fit a specific client or task (https://stackify.com/interface-segregation-principle/)[https://stackify.com/interface-segregation-principle/]. However, interface does not exist in JS.

- Don't put too much into an interface; split into separate interfaces
- YAGNI - You an't foing to need it

## Dependency Inversion Principle
It defines the relationship between the low level modules and the high level modules. In DIP, he high level modules should not directly depend on the low level modules. Instead, they should depend on abstraction (interfaces).

- High-level modules should not depend upon low-level ones; use abstraction

## Gamma Categorization
Design Patterns are typecally split into three categories.

### Creational Patterns
- Deal with the creation (construction) of objects
- Explicit (constructor) vs. implicit (DI, reflection, etc)
- Wholesale (singles statement) vs. piecewise (step-by-step)

### Structual Patterns
- Concerned with the structure (e.g., class members)
- Many patterns are wrappers that mimic the underlying class' interface
- Stress the importance of good API design

### Behavioral Patterns
- They are all different and unique; no central theme