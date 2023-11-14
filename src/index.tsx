import React from "react";
import ReactDOM from "react-dom/client";

import DynamicForm from "./components/DynamicForm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DynamicForm />
  </React.StrictMode>
);
