import Zod, { ZodType } from "zod";
import useForm from "./useForm";
import { Schema, ValidationError } from "yup";
import { convertToArray } from "../utils";

type setField = (partialField: Partial<Field>) => void;

export default function useField<T extends InputsType>(name: string, type: T) {
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

  const {
    input: { value },
    ...rest
  } = field;

  return {
    ...rest,
    value: value as MappedValue[T],
    setValue: setValue(field, setField),
    setTouched: setTouched(setField),
    setErrors: setErrors(setField),
    setDisplayed: setDisplayed(setField),
  };
}

const setValue = (field: Field, setField: setField) => (value: any) => {
  if (field.touched && field.validation) {
    validate(value, field.validation).then((errors) => {
      setErrors(setField)(convertToArray(errors));
      if (errors.length === 0) setField({ input: { ...field.input, value } });
    });
  } else {
    setField({ input: { ...field.input, value } });
  }
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

async function validate(value: any, validation: Validation) {
  if (typeof validation === "function") {
    try {
      validation(value);
    } catch (error: unknown) {
      return error as string[] | string;
    }
  }
  if (validation instanceof Schema) {
    try {
      await validation.validate(value);
    } catch (error: unknown) {
      const { errors } = error as ValidationError;
      return errors;
    }
  }
  if (validation instanceof ZodType) {
    try {
      validation.parse(value);
    } catch (error: unknown) {
      if (error instanceof Zod.ZodError)
        return error.issues.map((issue) => issue.message);
    }
  }
  return [];
}
