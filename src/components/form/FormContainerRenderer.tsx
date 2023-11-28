import React from "react";
import * as Containers from "../Containers";

function FormContainerRenderer<T extends ContainersPropsMapKeys>({
  type,
  props,
  children,
}: Container<T> & Children) {
  const ContainerComponent = Containers[type] as React.FC<
    ContainersPropsMap[typeof type]
  >;
  const { formStructure, ...rest } = props;
  return (
    <div>
      <ContainerComponent {...rest}>{children}</ContainerComponent>
    </div>
  );
}

export default FormContainerRenderer;
