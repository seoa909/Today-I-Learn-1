import { useObserver } from "mobx-react";
import { useStore } from "../components/hooks/useStore";

const Counter = () => {
  const numberStore = useStore("numberStore");

  const onClickIncrease = () => {
    numberStore.increaseAction(1);
  };

  const onClickDecrease = () => {
    numberStore.decreaseAction(1);
  };

  return useObserver(() => (
    <div>
      <h1>COUNTER</h1>
      <p>Current Value: {numberStore.num}</p>
      <button onClick={onClickIncrease}>INCREASE</button>
      <button onClick={onClickDecrease}>DECREASE</button>
    </div>
  ));
};

export default Counter;
