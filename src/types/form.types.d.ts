type FormDataStructure = {
  inputs?: ArrayOrElement<Input>;
  containers?: ArrayOrElement<Omit<Container, "children">>;
  others?: React.ReactNode;
  key?: string;
};

type FormStructure = ArrayOrElement<FormDataStructure>;

type Fields = StringKeyedObject<Field>;
type Field = {
  value: any;
  errors?: string[] | string;
  touched?: boolean;
  displayed?: boolean;
};
