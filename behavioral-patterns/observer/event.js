class Event {
  constructor() {
    // Map is used to be able to remove observables
    this.handlers = new Map()
    this.count = 0
  }

  subscribe(handler) {
    this.handlers.set(++this.count, handler)
    return this.count
  }

  unsubscribe(idx) {
    this.handlers.delete(idx)
  }

  /**
   * @param { Object } sender - who fired the event?
   * @param { Array } args - additional data (event args)
   */
  fire(sender, args) {
    this.handlers.forEach((v, k) => v(sender, args))
  }
}

class FallsIllArgs {
  constructor(address) {
    this.address = address
  }
}

// Passing a callback to the constructor is not scalable
//    because in that way, observers can't control when they should get notified
class Person {
  constructor(address) {
    this.address = address
    this.fallsIll = new Event()
  }

  catchCold() {
    this.fallsIll.fire(this, new FallsIllArgs(this.address))
  }
}

let person = new Person('123 London Road')
let sub = person.fallsIll.subscribe((s, a) => {
  console.log(`A doctor has been called ` + `to ${a.address}`)
})
person.catchCold()
person.catchCold()

person.fallsIll.unsubscribe(sub)
person.catchCold()
