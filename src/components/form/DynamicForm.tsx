import React from "react";
import FormProvider from "../../contexts/FormContext";
import RecursiveFormBuilder from "./RecursiveFormBuilder";

function DynamicForm({ ...props }: DynamicFormProps) {
  const { formStructure, onSubmit, ...rest } = props;
  return (
    <FormProvider formStructure={formStructure} onSubmit={onSubmit}>
      {(onFormSubmit) => (
        <form {...rest} onSubmit={onFormSubmit}>
          <RecursiveFormBuilder formStructure={formStructure} />
        </form>
      )}
    </FormProvider>
  );
}

export default DynamicForm;
