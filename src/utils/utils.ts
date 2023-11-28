export function convertToArray<T>(value: T | T[]): T[] {
  return Array.isArray(value) ? value : [value];
}

export function createInput<T extends InputsPropsMapKeys>(
  type: T,
  props: InputsPropsMap[T],
  customInput?: React.FC<typeof props>
): Input<T> {
  return { type, props, customInput };
}

export function createContainer<T extends ContainersPropsMapKeys>(
  type: T,
  props: ContainerProps<T>
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
          acc.push(...getFormNames(container.props.formStructure));
          return acc;
        },
        [] as string[]
      );
      acc.push(...names);
    }
    return acc;
  }, [] as string[]);
