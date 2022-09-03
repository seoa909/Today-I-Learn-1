import React from "react";
import { useNavigate } from "react-router-dom";
import Routing from "./components/Routing";

export const App = () => {
  const navigate = useNavigate();
  const onCounterLink = () => {
    navigate("/counter");
  };

  const onCRUDLink = () => {
    navigate("/crud");
  };
  return (
    <div>
      <h1>MOBX EXAMPLES</h1>
      <button onClick={onCounterLink}>Counter</button>
      <button onClick={onCRUDLink}>CRUD</button>
      <Routing />
    </div>
  );
};
