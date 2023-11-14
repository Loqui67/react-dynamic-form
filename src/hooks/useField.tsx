import useForm from "./useForm";

type setField = (partialField: Partial<Field>) => void;

export default function useField(name: string) {
  const { fields, setFields } = useForm();
  const field = fields[name];
  if (!field) {
    throw new Error(`Field ${name} not found`);
  }
  const setField = (partialField: Partial<Field>) => {
    setFields((fields) => ({
      ...fields,
      [name]: {
        ...field,
        ...partialField,
      },
    }));
  };

  return {
    ...field,
    setValue: setValue(setField),
    setTouched: setTouched(setField),
    setErrors: setErrors(setField),
    setDisplayed: setDisplayed(setField),
  };
}

const setValue = (setField: setField) => (value: any) => {
  setField({ value });
};

const setTouched = (setField: setField) => (touched: boolean) => {
  setField({ touched });
};

const setErrors = (setField: setField) => (errors: string[]) => {
  setField({ errors });
};

const setDisplayed = (setField: setField) => (displayed: boolean) => {
  setField({ displayed });
};
