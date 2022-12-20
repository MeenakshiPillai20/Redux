import React from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {increment,decrement,multiplication, division} from './counterSlice'

function Counter() {
    const value = useSelector((state) => state.counter.value);
    console.log(value);
    const dispatch = useDispatch();
  return (
    <>
       Counter 
       <h1> {value}</h1>
       <h2>
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
          <button onClick={() => dispatch(multiplication())}>Multiplication</button>
          <button onClick={() => dispatch(division())}>Division</button>
       </h2>
    </>
  )
}

export default Counter