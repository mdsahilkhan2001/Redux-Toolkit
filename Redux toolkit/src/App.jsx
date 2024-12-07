import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice';
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0); // Initialize state for amount
  const count = useSelector((state) => state.counter.value); // Access counter state
  const dispatch = useDispatch(); // Get dispatch function

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleResetClick() {
    dispatch(reset());
  }

  function handleIncAmountClick() {
    // Ensure amount is a number before dispatching
    dispatch(incrementByAmount(Number(amount)));
  }

  return (
    <div className='container'>
      <button onClick={handleIncrementClick}> + </button>
      <p>Count: {count}</p>
      <button onClick={handleDecrementClick}> - </button>
      <br />
      <br />
      <button onClick={handleResetClick}> Reset </button>
      <br />
      <br />
      <input
        type='number'
        value={amount}
        placeholder='Enter Amount'
        onChange={(e) => setAmount(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleIncAmountClick}> Inc by Amount </button>
    </div>
  );
}

export default App;
