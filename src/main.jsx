import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RouterForRoutes from "./Route/route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterForRoutes />
  </StrictMode>
);
