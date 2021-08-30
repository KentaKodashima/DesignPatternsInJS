# SOLID Design Principles

## Single Responsibility Principle
The idea of sinfle responsibility principle is that a class has to have just one responsibility to avoid having a class with a massive spagetti code. So, instead of adding a second responsibility to an existing class, you just add another class for the responsibility.

## Open-Closed Principle
The idea of open-closed principle is that classes are open for extension, but closed for modification. You won't modify a existing class unless you have to.

Usually, we should use inheritence by having a base class and extending other classes. However, in JS, the code runs without an error even if the extended class doesn't meet the requirements from the base class. The missing requirements will become just null.