import React from "react";
import * as Containers from "../Containers";

function FormContainerRenderer({
  type,
  props,
  children,
}: WithChildren<Containers>) {
  const ContainerComponent = Containers[type] as React.FC<typeof props>;
  return (
    <div>
      <ContainerComponent {...props}>{children}</ContainerComponent>
    </div>
  );
}

export default FormContainerRenderer;
