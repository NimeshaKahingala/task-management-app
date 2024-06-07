import { useReducer } from 'react';
import './App.css';

function App() {
  const initialCount = 0;
  function reducer(state,action) {
    switch (action.type) {
      case "INCREMENT" :
       return state = state + 1;
       case "DECREMENT" :
        return state = state - 1;
        case "INCREMENT_BY_TWO" :
       return state = state + action.payload;
    }
  }

  const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => {
        dispatch({ type: "INCREMENT" })
      }}>Increment</button>
      <button onClick={() => {
        dispatch({ type: "DECREMENT" })
      }}>Decrement</button>
      <button onClick={() => {
        dispatch({ type: "INCREMENT_BY_TWO", payload:2 })
      }}>Increment by 2</button>
    </div>
  );
}

export default App;
