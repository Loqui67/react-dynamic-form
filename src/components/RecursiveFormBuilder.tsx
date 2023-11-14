import React from "react";
import FormInputRenderer from "./FormInputRenderer";
import { convertToArray } from "../utils";

interface RecursiveFormBuilderProps {
  formStructure: FormStructure;
  level?: number;
}

function RecursiveFormBuilder({
  formStructure,
  level = 0,
}: RecursiveFormBuilderProps) {
  if (!formStructure) return null;
  return (
    <div className={`container-level-${level}`}>
      {convertToArray(formStructure).map((element, index) => {
        const { key, inputs, container } = element;
        return (
          <div
            key={key}
            className={`element-level-${level} element-index-${index}`}
          >
            {inputs && (
              <div className={`inputs-level-${level}`}>
                {convertToArray(inputs).map((input) => (
                  <FormInputRenderer {...input} />
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default RecursiveFormBuilder;
