type StringKeyedObject<T = any> = Record<string, T>;

type ArrayOrElement<T> = T[] | T;

type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
type PartialExcept<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;

type Getters<Type> = {
  [Property in keyof Type as `get${Capitalize<
    string & Property
  >}`]: () => Type[Property];
};
type Setters<Type> = {
  [Property in keyof Type as `set${Capitalize<string & Property>}`]: (
    value: Type[Property]
  ) => void;
};

type setState<T> = React.Dispatch<React.SetStateAction<T>>;

type With<T = {}, K = {}> = T & K;

type WithChildren<T = {}> = With<T, { children: React.ReactNode }>;
type WithoutChildren<T = {}> = Omit<T, "children">;

type OmitMultiple<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
type OmitExcept<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> &
  Partial<Omit<T, K>>;

type Children = ArrayOrElement<React.ReactNode>;
