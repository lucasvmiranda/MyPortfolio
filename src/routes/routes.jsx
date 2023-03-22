import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} exact />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
