import React, { createContext } from "react";

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
  const [fields, setFields] = React.useState<Fields>({});
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
