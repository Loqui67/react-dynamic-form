type WithNameAndLabel<T> = T & { name: string; label?: string };

interface TextInputProps
  extends WithNameAndLabel<React.InputHTMLAttributes<HTMLInputElement>> {}
type TextInputName = "TextInput";
interface NumberInputProps
  extends WithNameAndLabel<React.InputHTMLAttributes<HTMLInputElement>> {
  value?: number;
}
type NumberInputName = "NumberInput";

interface TextAreaInputProps
  extends WithNameAndLabel<React.TextareaHTMLAttributes<HTMLTextAreaElement>> {}
type TextAreaInputName = "TextAreaInput";
interface SelectInputProps
  extends WithNameAndLabel<React.SelectHTMLAttributes<HTMLSelectElement>> {
  options: Option[];
}
type SelectInputName = "SelectInput";

interface Option extends React.OptionHTMLAttributes<HTMLOptionElement> {}

interface CheckboxInputProps
  extends WithNameAndLabel<React.InputHTMLAttributes<HTMLInputElement>> {
  options: Option[];
  value?: string[];
}
type CheckboxInputName = "CheckboxInput";
interface RadioInputProps
  extends WithNameAndLabel<React.InputHTMLAttributes<HTMLInputElement>> {
  options: Option[];
  value?: string;
}
type RadioInputName = "RadioInput";
interface FileInputProps
  extends WithNameAndLabel<React.InputHTMLAttributes<HTMLInputElement>> {
  value?: FileList;
}
type FileInputName = "FileInput";

type AllInputsName =
  | TextInputName
  | NumberInputName
  | TextAreaInputName
  | SelectInputName
  | CheckboxInputName
  | RadioInputName
  | FileInputName;

type InputsPropsMap = {
  TextInput: TextInputProps;
  NumberInput: NumberInputProps;
  TextAreaInput: TextAreaInputProps;
  SelectInput: SelectInputProps;
  CheckboxInput: CheckboxInputProps;
  RadioInput: RadioInputProps;
  FileInput: FileInputProps;
};

type InputsPropsMapKeys = AllInputsName;

type MappedValue = {
  [key in AllInputsName]: Input<key>["props"]["value"];
};

type Input<K extends InputsPropsMapKeys> = {
  type: K;
  props: InputsPropsMap[K];
  value?: MappedValue[K];
  dependencies?: string[];
  validation?: Validation;
};

type Inputs =
  | Input<TextInputName>
  | Input<NumberInputName>
  | Input<TextAreaInputName>
  | Input<SelectInputName>
  | Input<CheckboxInputName>
  | Input<RadioInputName>
  | Input<FileInputName>;
