type StringKeyedObject<T = any> = Record<string, T>;

type ArrayOrElement<T> = T[] | T;

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

type PartialExcept<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};

type setState<T> = React.Dispatch<React.SetStateAction<T>>;

type Children = {
  children?: React.ReactNode;
};
