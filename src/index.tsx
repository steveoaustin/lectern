import "./index.css";

import { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

const firstborn = ReactDOM.createRoot(
  document.getElementById("firstborn") as HTMLElement
);
firstborn.render(
  <StrictMode>
    <App />
  </StrictMode>
);
