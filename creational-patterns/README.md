# Creational Patterns
## Factory pattern
Factory is a component responsible solely for the wholesale (not piecewise) cration of objects.

Definition from ["Learning JavaScript Design Patterns" by Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript)
> The Factory pattern is another creational pattern concerned with the notion of creating objects. Where it differs from the other patterns in its category is that it doesn't explicitly require us to use a constructor. Instead, a Factory can provide a generic interface for creating objects, where we can specify the type of factory object we wish to be created.

- Object creation logic becomes too convoluted
- Initializer is not descriptive
  - Name is always `__innit__`
  - Cannot overload with same sets of arguments with different names
  - Can turn into optional parameter hell
- Wholesale object creation (non-piecewise, unlike Builder) can be outsourced to:
  - A separate method (**Factory Method**)
  - That may exist in a separate class (**Factory**)
  - Can create hierarchy of factories with **Abstract Factory**

### When To Use The Factory Pattern
Cases from ["Learning JavaScript Design Patterns" by Addy Osmani](https://addyosmani.com/resources/essentialjsdesignpatterns/book/#factorypatternjavascript)

> The Factory pattern can be especially useful when applied to the following situations:
> - When our object or component setup involves a high level of complexity
> - When we need to easily generate different instances of objects depending on the environment we are in
> - When we're working with many small objects or components that share the same properties
> - When composing objects with instances of other objects that need only satisfy an API contract (aka, duck typing) to work. This is useful for decoupling.

### Factory method
A factory method is a static method that creates objects.

### Factory
Factory is just a separate class or separate component which takes on the responsibility of creating objects. Different responsibility should be separated from the base class according to the single responsibility principle. A facotry can be external or reside inside the object as an inner class.

### Abstract factory
Hierarchies of factories can be used to create related objects.

## Singleton Pattern
The singleton pattern restricts instantiation of a class to a single object. The singleton pattern can be implemented by creating a class with a method that creates a new instance of the class if one doesn't exist. If th instance already exists, it simply returns a reference to that object.

### Motivation
- For some components it only makes sense to have one in the system
  - Database repository
  - Object factory
- E.g. the constructor call is expensive
  - We want initialization to only happen once
  - We provide everyone with the same instance
- Want to prevent anyone creating additional copies

### Monostate
Many instances with shared data. Instead of making the class to be singleton, it shares the same data.

### Problems with singleton pattern
Singleton can be a problem if it directly depends on the dependency. It is better to introduce a dependency instead. 