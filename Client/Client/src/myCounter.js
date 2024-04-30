import React, { useContext, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CounterContext } from "./App"; // Assuming CounterContext is exported from App.js

const MyCounter = () => {
  const { state, dispatch } = useContext(CounterContext);
  const navigate = useNavigate();

  const incrementMyCount = useCallback(() => {
    dispatch({ type: "INCREMENT_MY_COUNT" });
  }, [dispatch]);

  const decrementMyCount = useCallback(() => {
    dispatch({ type: "DECREMENT_MY_COUNT" });
  }, [dispatch]);

  return (
    <div>
      <h2>My Counter</h2>
      <p>Count: {state.count}</p>
      <p>My Count: {state.myCount}</p>
      <button onClick={incrementMyCount}>Increment My Count</button>
      <button onClick={decrementMyCount}>Decrement My Count</button>
      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default MyCounter;
