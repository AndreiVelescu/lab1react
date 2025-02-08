import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hello from "./components/FirstComponent";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Hello />
  </StrictMode>
);
