import React, { createContext } from "react";
import { getFormInputs } from "../utils";

interface ContextObject {
  fields: Fields;
  setFields: setState<Fields>;
  formStructure: FormStructure;
}

export const FormContext = createContext({
  fields: {},
  setFields: () => {},
  formStructure: [],
} as ContextObject);

interface FormProviderProps {
  formStructure: FormStructure;
  onSubmit: (v: Fields) => void;
  children: (
    v: (e: React.FormEvent<HTMLFormElement>) => void
  ) => React.ReactNode;
}

export default function FormProvider({
  formStructure,
  onSubmit,
  children,
}: FormProviderProps) {
  const formInputs = getFormInputs(formStructure);

  const initialFields = Object.keys(formInputs).reduce((acc, name) => {
    const input = formInputs[name] as Inputs;
    if (input.type === "NumberInput")
      acc[name] = {
        input,
        errors: "",
        touched: false,
        displayed: true,
      } as Field;
    return acc;
  }, {} as Fields);

  const [fields, setFields] = React.useState<Fields>(initialFields);
  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(fields);
  };
  return (
    <FormContext.Provider
      value={{
        fields,
        setFields,
        formStructure,
      }}
    >
      {children(onFormSubmit)}
    </FormContext.Provider>
  );
}
