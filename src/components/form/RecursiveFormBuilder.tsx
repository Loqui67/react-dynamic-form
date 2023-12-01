import React from "react";
import FormInputRenderer from "./FormInputRenderer";
import { convertToArray } from "../../utils";
import FormContainerRenderer from "./FormContainerRenderer";

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
        const { key, inputs, containers, others } = element;
        return (
          <div
            key={key || `element-${index}`}
            className={`element-level-${level} element-index-${index}`}
          >
            {others && <div className={`others-level-${level}`}>{others}</div>}
            {inputs && (
              <div className={`inputs-level-${level}`}>
                {convertToArray(inputs).map((input, index) => (
                  <FormInputRenderer
                    {...input}
                    key={`input-${input.type}-${index}`}
                  />
                ))}
              </div>
            )}
            {containers && (
              <div className={`containers-level-${level}`}>
                {convertToArray(containers).map((container, index) => (
                  <FormContainerRenderer
                    {...container}
                    key={`container-${container.type}-${index}`}
                  >
                    <RecursiveFormBuilder
                      formStructure={container.formStructure}
                      level={level + 1}
                    />
                  </FormContainerRenderer>
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
