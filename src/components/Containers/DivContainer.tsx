import React from "react";

function DivContainer({ children, ...props }: DivContainerProps) {
  return <div {...props}>{children}</div>;
}

export default DivContainer;
