class Singleton {
  constructor() {
    const instance = this.constructor.instance
    if (instance) {
      return instance
    }

    this.constructor.instance = this
  }

  foo() {
    console.log('Doing something...')
  }
}

let s1 = new Singleton()
let s2 = new Singleton()
// Both instances are identical because s2 is a reference to the s1
console.log('Are they identical? ' + (s1 === s2))
s1.foo()
