import React from "react";
import { createRoot } from "react-dom/client";
import "antd/dist/reset.css";
import App from "./App";
const root = createRoot(document.getElementById("root") as HTMLDivElement);

root.render(
  <>
    <App />
  </>
);
