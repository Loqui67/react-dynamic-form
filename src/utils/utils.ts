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
