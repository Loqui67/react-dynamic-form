import React from "react";
import * as Containers from "./Containers";

function FormContainerRenderer<T extends ContainersPropsMapKeys>({
  type,
  props,
}: Container<T>) {
  const ContainerComponent = Containers[type] as React.FC<
    ContainersPropsMap[typeof type]
  >;
  return <ContainerComponent {...props} />;
}

export default FormContainerRenderer;
