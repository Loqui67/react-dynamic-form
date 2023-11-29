type FormDataStructure = {
  inputs?: ArrayOrElement<Inputs>;
  containers?: ArrayOrElement<Container>;
  others?: React.ReactNode;
  key?: string;
};

type FormStructure = ArrayOrElement<FormDataStructure>;

type Fields = StringKeyedObject<Field>;
type Field = {
  input: Inputs;
  errors?: ArrayOrElement<string>;
  touched?: boolean;
  displayed?: boolean;
  validation?: Validation;
};

type Validation =
  | import("yup").AnySchema
  | import("zod").ZodSchema<Any>
  | ((value: any) => void);

type DynamicFormProps = {
  formStructure: FormStructure;
  onSubmit: (values: Fields) => void;
} & OmitMultiple<
  React.FormHTMLAttributes<HTMLFormElement>,
  "onSubmit" | "action"
>;
