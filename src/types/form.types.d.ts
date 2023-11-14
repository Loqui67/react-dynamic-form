type FormDataStructure = {
  inputs?: ArrayOrElement<Input>;
  containers?: ArrayOrElement<Container>;
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
