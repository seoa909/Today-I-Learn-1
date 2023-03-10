import { useObserver } from "mobx-react";
import { useEffect } from "react";
import { useStore } from "../components/hooks/useStore";

const CRUD = () => {
  const crudStore = useStore("newUserStore");
  const { list } = crudStore;

  useEffect(() => {
    crudStore.getUserAction();
    console.log(list);
  }, []);

  return useObserver(() => (
    <div>
      <h1>CRUD</h1>
    </div>
  ));
};

export default CRUD;
