// How to implement Event Emitter in JavaScript? | Facebook Interview Question

class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(eventName, listnear) {
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }

    this.events[eventName].push(listnear);

    // console.log("----------------Event Add--------------------");
    console.log(this.events);
  }

  emit(eventName, ...args) {
    if (!this.events[eventName]) return;

    this.events[eventName].forEach((listnear) => {
      listnear(...args);
    });
  }

  off(eventName, listnerToRemove) {
    if (!this.events[eventName]) return;

    this.events[eventName] = this.events[eventName].filter((listnear) => {
      return listnear != listnerToRemove;
    });

    console.log("----------------Event Off--------------------");
    console.log(this.events);
  }
}

const emitter = new EventEmitter();

function greet(name) {
  console.log(`Hello ${name}`);
}

function Respect(name) {
  console.log(`Hello------------world ${name}`);
}
function EarnIt(name) {
  console.log(`Hello----Worker------world ${name}`);
}

emitter.on("Welcome", greet);
emitter.on("Welcome", Respect);
emitter.on("Welcome", EarnIt);

emitter.off("Welcome", greet);

// emitter.emit("Welcome", "Bhavik");
emitter.emit("Welcome", "Bhavik");
