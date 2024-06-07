import { useReducer } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from "./slice/counterSlice";
import { incrementB, decrementB,incrementByAmountB } from './slice/counterBSlice';
import './App.css';

function App() {
  const countValueA = useSelector((state) => { return state.counter.count });
  const dispatch = useDispatch();
  const countValueB = useSelector((state) => { return state.counterB.count });

  // const initialCount = 0;
  // function reducer(state,action) {
  //   switch (action.type) {
  //     case "INCREMENT" :
  //      return state = state + 1;
  //      case "DECREMENT" :
  //       return state = state - 1;
  //       case "INCREMENT_BY_TWO" :
  //      return state = state + action.payload;
  //   }
  // }

  //const [count, dispatch] = useReducer(reducer, initialCount);
  return (
    <div className="App">
      <div>{countValueA}</div>
      <button onClick={() => {
        // dispatch({ type: "INCREMENT" })
        dispatch(increment())
      }}>Increment</button>
      <button onClick={() => {
        // dispatch({ type: "DECREMENT" })
        dispatch(decrement())
      }}>Decrement</button>
      <button onClick={() => {
        // dispatch({ type: "INCREMENT_BY_TWO", payload:2 })
        dispatch(incrementByAmount(2))
      }}>Increment by 2</button>


      <div>{countValueB}</div>
      <button onClick={() => { dispatch(incrementB()) }}>Increment</button>
      <button onClick={() => { dispatch(decrementB()) }}>Decrement</button>
      <button onClick={() => { dispatch(incrementByAmountB(5)) }}>IncrementBy5</button>
    </div>
  );
}

export default App;
