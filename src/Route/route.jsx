import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import App from "../App";
import MainHeader from "../component/header";
import LayoutFunc from "../component/layout";

function RouterForRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutFunc />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RouterForRoutes;
