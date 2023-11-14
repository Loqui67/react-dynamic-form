import React, { createContext } from "react";
import { getFormNames } from "../utils";

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
  children: React.ReactNode;
}

export default function FormProvider({
  formStructure,
  children,
}: FormProviderProps) {
  const formNames = getFormNames(formStructure);

  const initialFields = formNames.reduce((acc, name) => {
    acc[name] = {
      value: "",
      errors: "",
      displayed: true,
      touched: false,
    };
    return acc;
  }, {} as Fields);

  const [fields, setFields] = React.useState<Fields>(initialFields);
  return (
    <FormContext.Provider
      value={{
        fields,
        setFields,
        formStructure,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}
