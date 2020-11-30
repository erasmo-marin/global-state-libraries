import EventEmmiter from "events";
import ActionTypes from "./actionTypes";
import Dispatcher from "./dispatcher";

class CounterStore extends EventEmmiter {
  constructor() {
    super();
    this.count = 0;
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
  }

  emitChange() {
    this.emit("change");
  }

  addChangeListener(callback) {
    this.on("change", callback);
  }

  removeChangeListener(callback) {
    this.removeListener("change", callback);
  }

  increment() {
    this.count = this.count + 1;
    this.emitChange();
  }

  decrement() {
    this.count = this.count - 1;
    this.emitChange();
  }

  reset() {
    this.count = 0;
    this.emitChange();
  }
}

const store = new CounterStore();

Dispatcher.register(({ type }) => {
  switch (type) {
    case ActionTypes.INCREMENT:
      store.increment();
      break;
    case ActionTypes.DECREMENT:
      store.decrement();
      break;
    case ActionTypes.RESET:
      store.reset();
      break;
    default:
      break;
  }
});

export default store;
