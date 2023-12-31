import React from "react";
import FormProvider from "../contexts/FormContext";
import RecursiveFormBuilder from "./RecursiveFormBuilder";
import { createInput } from "../utils";
import { TEXT_INPUT } from "../constants/Input";

const formStructure: FormStructure = [
  {
    inputs: [
      createInput(TEXT_INPUT, {
        label: "First Name",
        name: "firstName",
      }),
      createInput(TEXT_INPUT, {
        label: "Last Name",
        name: "lastName",
      }),
    ],
  },
  {
    inputs: [
      createInput(TEXT_INPUT, {
        label: "Email",
        name: "email",
      }),
      createInput(TEXT_INPUT, {
        label: "Phone",
        name: "phone",
      }),
    ],
  },
  {
    inputs: [
      createInput(TEXT_INPUT, {
        label: "Address",
        name: "address",
      }),
      createInput(TEXT_INPUT, {
        label: "City",
        name: "city",
      }),
      createInput(TEXT_INPUT, {
        label: "State",
        name: "state",
      }),
      createInput(TEXT_INPUT, {
        label: "Zip",
        name: "zip",
      }),
    ],
  },
];

function DynamicForm() {
  return (
    <FormProvider formStructure={formStructure}>
      <form action="">
        <RecursiveFormBuilder formStructure={formStructure} />
      </form>
    </FormProvider>
  );
}

export default DynamicForm;
