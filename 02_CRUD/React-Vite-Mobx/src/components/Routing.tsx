import { Routes, Route } from "react-router-dom";
import Counter from "../pages/Counter";
import CRUD from "../pages/CRUD";

const Routing = () => {
  return (
    <Routes>
      <Route path="/counter" element={<Counter />} />
      <Route path="/crud" element={<CRUD />} />
    </Routes>
  );
};

export default Routing;
