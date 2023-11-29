import React from "react";
import useField from "../../hooks/useField";
import { TEXT_INPUT } from "../../constants";

function TextInput({ ...props }: TextInputProps) {
  const { value, setValue } = useField(props.name, TEXT_INPUT);
  return (
    <input
      {...props}
      type="text"
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

export default TextInput;
