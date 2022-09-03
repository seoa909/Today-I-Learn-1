import { useObserver } from "mobx-react";
import { useEffect } from "react";
import { useStore } from "../components/hooks/useStore";

const CRUD = () => {
  const crudStore = useStore("newUserStore");

  useEffect(() => {
    crudStore.getUserAction();
  }, []);

  return useObserver(() => (
    <div>
      <h1>CRUD</h1>
    </div>
  ));
};

export default CRUD;
