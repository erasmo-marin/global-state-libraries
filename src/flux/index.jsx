import React from "react";
import CounterStore from "./store";
import Actions from "./actions";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      count: CounterStore.count,
    };
  }

  onChange() {
    this.setState({
      count: CounterStore.count,
    });
  }

  componentDidMount() {
    CounterStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    CounterStore.removeChangeListener(this.onChange);
  }

  render() {
    return (
      <div className="example">
        <h2>Flux Example</h2>
        <h2>{this.state.count}</h2>
        <button onClick={() => Actions.decrement()}>-</button>
        <button onClick={() => Actions.increment()}>+</button>
        <button onClick={() => Actions.reset()}>Reset</button>
        <br />
      </div>
    );
  }
}

export default Counter;
