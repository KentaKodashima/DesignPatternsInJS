let Color = Object.freeze({
  red: 'red',
  green: 'green',
  blue: 'blue'
})

let Size = Object.freeze({
  small: 'small',
  medium: 'medium',
  large: 'large',
  yuge: 'yuge'
})

class Product {
  constructor(name, color, size) {
    this.name = name;
    this.color = color;
    this.size = size;
  }
}

// An approach that causes state space explosion, meaning is approach doesn't work infinity.
//  The folowing approach will end up with having a bunch of methods depending on the filter type.
//  If there is another property like weight, there will be more methonds.
class ProductFilter {
  filterByColor(products, color) {
    return products.filter(p => p.color === color);
  }

  filterBySize(products, size) {
    return products.filter(p => p.size === size);
  }

  filterBySizeAndColor(products, size, color) {
    return products.filter(p =>
      p.size === size && p.color === color);
  }

  // .... a bunch of other filters when there are more requirements added in the future.
  // it is not scalable.
}

let apple = new Product('Apple', Color.green, Size.small);
let tree  = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

// let pf = new ProductFilter();
// console.log(`Green products (old):`);
// for (let p of pf.filterByColor(products, Color.green))
//   console.log(` * ${p.name} is green`);
// ↑↑↑ BEFORE

// ↓↓↓ AFTER
// Instead of having a class for filtering, we could create separate classes for each criteria.
//  In this approach, we don't need to modify the existing class when there is a need for new criteria.
//  We can just create another class instead.
//  This approach gives more flexibility and scalability.
// General interface for a specification

// Usually, we should use inheritence by having a base class and extending other classes.
//  However, in JS, the code runs without an error even if the extended class doesn't meet the requirements from the base class.
//  The missing requirements will become just null
class Specification {
  constructor() {
    if (this.constructor.name === 'Specification')
      throw new Error('Specification is abstract.')
  }

  isSatisfied(item) {}
}
// class ColorSpecification extends Specification {
//   constructor(color) {
//     this.color = color;
//   }

//   isSatisfied(item) {
//     return item.color === this.color;
//   }
// }

// class SizeSpecification extends Specification {
//   constructor(size) {
//     this.size = size;
//   }

//   isSatisfied(item) {
//     return item.size === this.size;
//   }
// }

class ColorSpecification {
  constructor(color) {
    this.color = color;
  }

  isSatisfied(item) {
    return item.color === this.color;
  }
}

class SizeSpecification {
  constructor(size) {
    this.size = size;
  }

  isSatisfied(item) {
    return item.size === this.size;
  }
}

class BetterFilter {
  filter(items, spec) {
    return items.filter(x => spec.isSatisfied(x));
  }
}

// specification combinator
class AndSpecification {
  constructor(...specs) {
    this.specs = specs;
  }

  isSatisfied(item) {
    return this.specs.every(x => x.isSatisfied(item));
  }
}

let bf = new BetterFilter();
console.log(`Green products (new):`)
for (let p of bf.filter(products, new ColorSpecification(Color.green))) {
  console.log(` * ${p.name} is green`)
}

console.log(`Large products:`)
for (let p of bf.filter(products, new SizeSpecification(Size.large))) {
  console.log(` * ${p.name} is large`)
}

console.log(`Large and green products:`)
let spec = new AndSpecification(
  new ColorSpecification(Color.green),
  new SizeSpecification(Size.large)
)
for (let p of bf.filter(products, spec))
  console.log(` * ${p.name} is large and green`)