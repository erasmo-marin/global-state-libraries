import ActionTypes from "./actionTypes";
import Dispatcher from "./dispatcher";

const Actions = {
  increment() {
    Dispatcher.dispatch({
      type: ActionTypes.INCREMENT,
    });
  },

  decrement() {
    Dispatcher.dispatch({
      type: ActionTypes.DECREMENT,
    });
  },

  reset() {
    Dispatcher.dispatch({
      type: ActionTypes.RESET,
    });
  },
};

export default Actions;
