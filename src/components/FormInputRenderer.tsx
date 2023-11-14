import React from "react";
import * as Inputs from "./Inputs";

function FormInputRenderer<T extends InputsPropsMapKeys>({
  type,
  props,
}: Input<T>) {
  const InputComponent = Inputs[type] as React.FC<InputsPropsMap[typeof type]>;
  return <InputComponent {...props} />;
}

export default FormInputRenderer;
