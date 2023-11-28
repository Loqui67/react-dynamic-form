import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import DynamicForm from "./components/form/DynamicForm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DynamicForm />
  </React.StrictMode>
);
