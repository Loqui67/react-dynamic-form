import React from "react";
import useField from "../../hooks/useField";

function TextInput({ ...props }: TextInputProps) {
  const { value, setValue } = useField(props.name);
  return (
    <input
      type="text"
      {...props}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
}

export default TextInput;
