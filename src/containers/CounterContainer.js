import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { increase, decrease } from "../modules/counter";

const CounterContainer = () => {
  const number = useSelector(
    (state) => state.counter.number
  );
  const dispatch = useDispatch();

  return (
    <Counter
      number={number}
      onIncrese={useCallback(() => dispatch(increase()), [
        dispatch,
      ])}
      onDecrease={useCallback(() => dispatch(decrease()), [
        dispatch,
      ])}
    />
  );
};

export default CounterContainer;
