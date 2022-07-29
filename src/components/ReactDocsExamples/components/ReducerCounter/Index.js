import React, { useReducer } from "react";

function init(initialState) {
  return { count: initialState };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

function Counter({ initialState }) {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <>
      <div>
        Count: {state.count}
      </div>
      <button
        onClick={() => dispatch({ type: 'reset', payload: initialState })}>
        Reset
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
    </>
  );
}

export default Counter