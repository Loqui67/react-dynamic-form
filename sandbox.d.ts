type HTMLAttributes<T> = React.HTMLAttributes<T> & {
  name: string;
  label?: string;
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

type InputsByType =
  | {
      type: "TextInput";
      props: TextInputProps;
      value?: string;
    }
  | {
      type: "NumberInput";
      props: NumberInputProps;
      value?: number;
    }
  | {
      type: "TextAreaInput";
      props: TextAreaInputProps;
      value?: string;
    }
  | {
      type: "SelectInput";
      props: SelectInputProps;
      value?: string;
    }
  | {
      type: "CheckboxInput";
      props: CheckboxInputProps;
      value?: boolean;
    }
  | {
      type: "RadioInput";
      props: RadioInputProps;
      value?: boolean;
    }
  | {
      type: "FileInput";
      props: FileInputProps;
      value?: FileList;
    };

type Inputs = InputsByType & {
  dependencies?: string[];
};
type InputsType = Inputs["type"];
type InputsProps = Inputs["props"];
