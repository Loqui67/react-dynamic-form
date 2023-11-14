type FormDataStructure = {
  inputs?: ArrayOrElement<Input>;
  container?: ArrayOrElement<Container>;
  key?: string;
};

type FormStructure = ArrayOrElement<FormDataStructure>;

type Fields = StringKeyedObject<Field>;
type Field = {
  value: any;
  errors?: string[];
  touched?: boolean;
  displayed?: boolean;
};
