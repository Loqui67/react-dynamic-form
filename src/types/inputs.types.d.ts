type HTMLAttributes<T> = React.HTMLAttributes<T> & {
  name: string;
  label: string;
};

interface TextInputProps extends HTMLAttributes<HTMLInputElement> {}
interface NumberInputProps extends HTMLAttributes<HTMLInputElement> {
  value: number;
}

interface TextAreaInputProps extends HTMLAttributes<HTMLTextAreaElement> {}

interface SelectInputProps extends HTMLAttributes<HTMLSelectElement> {
  options: Option[];
}

interface Option extends HTMLAttributes<HTMLOptionElement> {}

interface CheckboxInputProps extends HTMLAttributes<HTMLInputElement> {}

interface RadioInputProps extends HTMLAttributes<HTMLInputElement> {}

interface FileInputProps extends HTMLAttributes<HTMLInputElement> {}

type InputsPropsMap = {
  TextInput: TextInputProps;
  NumberInput: NumberInputProps;
  TextAreaInput: TextAreaInputProps;
  SelectInput: SelectInputProps;
  CheckboxInput: CheckboxInputProps;
  RadioInput: RadioInputProps;
  FileInput: FileInputProps;
};
type InputsPropsMapKeys = keyof InputsPropsMap;

type Input<T extends InputsPropsMapKeys = InputsPropsMapKeys> = {
  type: T;
  props: InputsPropsMap[T];
};
