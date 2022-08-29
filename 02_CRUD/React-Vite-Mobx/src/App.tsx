import { useObserver } from "mobx-react";
import indexStore from "./modules/indexStore";

const App = () => {
  const { numberStore } = indexStore();

  const onClickIncrease = () => {
    numberStore.increaseAction(1);
  };

  const onClickDecrease = () => {
    numberStore.decreaseAction(1);
  };

  return useObserver(() => (
    <div>
      <p>현재 값: {numberStore.num}</p>

      <button onClick={onClickIncrease}>증가</button>
      <button onClick={onClickDecrease}>감소</button>
    </div>
  ));
};

export default App;
