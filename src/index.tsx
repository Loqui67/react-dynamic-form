import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import DynamicForm from "./components/form/DynamicForm";

import { DIV_CONTAINER, TEXT_INPUT } from "./constants";

const formStructure: FormStructure = [
  {
    containers: {
      type: DIV_CONTAINER,
      props: {},
      formStructure: {
        inputs: [
          {
            type: TEXT_INPUT,
            props: {
              label: "First Name",
              name: "firstName",
            },
          },
          {
            type: TEXT_INPUT,
            props: {
              label: "Last Name",
              name: "lastName",
            },
          },
        ],
      },
    },
  },
  {
    inputs: [
      {
        type: TEXT_INPUT,
        props: {
          label: "Email",
          name: "email",
        },
      },
      {
        type: TEXT_INPUT,
        props: {
          label: "Phone",
          name: "phone",
        },
      },
    ],
  },
  {
    inputs: [
      {
        type: TEXT_INPUT,
        props: {
          label: "Address",
          name: "address",
        },
      },
      {
        type: TEXT_INPUT,
        props: {
          label: "City",
          name: "city",
        },
      },
      {
        type: TEXT_INPUT,
        props: {
          label: "State",
          name: "state",
        },
      },
      {
        type: TEXT_INPUT,
        props: {
          label: "Zip",
          name: "zip",
        },
      },
    ],
  },
];

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <DynamicForm
      formStructure={formStructure}
      onSubmit={(v: any) => console.log(v)}
    />
  </React.StrictMode>
);
