import { BrowserRouter, Routes, Route } from "react-router-dom";
import FinishedOrder from "../pages/FinishedOrder";
import Home from "../pages/Home";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/finished-order" element={<FinishedOrder />} />
      </Routes>
    </BrowserRouter>
  );
};
export default Routers;
