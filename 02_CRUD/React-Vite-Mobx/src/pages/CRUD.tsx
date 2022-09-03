import { inject, useObserver } from "mobx-react";
import { useEffect } from "react";
import indexStore from "../modules/indexStore";

const CRUD = () => {
  const { userStore } = indexStore();
  const store = new userStore();

  useEffect(() => {
    store.getUserAction();
  }, []);

  return useObserver(() => (
    <div>
      <h1>CRUD</h1>
    </div>
  ));
};

export default CRUD;
