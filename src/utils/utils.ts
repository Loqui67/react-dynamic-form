export function convertToArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export function createInput<T extends InputsPropsMapKeys>(
  type: T,
  props: InputsPropsMap[T]
): Input<T> {
  return { type, props };
}

export function createContainer<T extends ContainersPropsMapKeys>(
  type: T,
  props: ContainersPropsMap[T]
): Container<T> {
  return { type, props };
}

export const getFormNames = (formStructure: FormStructure): string[] =>
  convertToArray(formStructure).reduce((acc, element) => {
    if (element.inputs) {
      convertToArray(element.inputs).forEach((input) => {
        acc.push(input.props.name);
      });
    }

    if (element.containers) {
      const names = convertToArray(element.containers).reduce(
        (acc, container) => {
          acc.push(...getFormNames(container.props.children));
          return acc;
        },
        [] as string[]
      );
      acc.push(...names);
    }
    return acc;
  }, [] as string[]);
