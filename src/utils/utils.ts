export function convertToArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export const getFormInputs = (
  formStructure: FormStructure
): StringKeyedObject<Inputs> =>
  convertToArray(formStructure).reduce((acc, element) => {
    if (element.inputs) {
      convertToArray(element.inputs).forEach((input) => {
        acc = { ...acc, [input.props.name]: input };
      });
    }

    if (element.containers) {
      const names = convertToArray(element.containers).reduce(
        (acc, container) => {
          acc = { ...acc, ...getFormInputs(container.formStructure) };
          return acc;
        },
        {} as StringKeyedObject<Inputs>
      );
      acc = { ...acc, ...names };
    }
    return acc;
  }, {} as StringKeyedObject<Inputs>);
