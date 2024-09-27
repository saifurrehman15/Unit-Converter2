import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import RouterForRoutes from "./Route/route.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterForRoutes>
      <App />
    </RouterForRoutes>
  </StrictMode>
);
