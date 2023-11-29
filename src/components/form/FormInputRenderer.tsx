import React from "react";
import * as Inputs from "../Inputs";

function FormInputRenderer({ type, props }: Inputs) {
  const InputComponent = Inputs[type] as React.FC<typeof props>;
  return <InputComponent {...props} />;
}

export default FormInputRenderer;
