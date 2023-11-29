export function convertToArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export function createContainer<T extends ContainersPropsMapKeys>(
  type: T,
  props: ContainerProps<T>
): Container<T> {
  return { type, props };
}

export const getFormInputs = (
  formStructure: FormStructure
): Record<string, Inputs> =>
  convertToArray(formStructure).reduce((acc, element) => {
    if (element.inputs) {
      convertToArray(element.inputs).forEach((input) => {
        acc = { ...acc, [input.props.name]: input };
      });
    }

    if (element.containers) {
      const names = convertToArray(element.containers).reduce(
        (acc, container) => {
          acc = { ...acc, ...getFormInputs(container.props.formStructure) };
          return acc;
        },
        {} as Record<string, Inputs>
      );
      acc = { ...acc, ...names };
    }
    return acc;
  }, {} as Record<string, Inputs>);
