interface DivContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Children {
  div?: string;
}
interface DrawerContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Children {
  drawer?: string;
}
interface TabContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Children {
  tab?: string;
}
interface ModalContainerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    Children {
  modal?: string;
}

type ContainersPropsMap = {
  DrawerContainer: DrawerContainerProps;
  ModalContainer: ModalContainerProps;
  TabContainer: TabContainerProps;
  DivContainer: DivContainerProps;
};

type ContainersPropsMapKeys = keyof ContainersPropsMap;

type Container<K extends ContainersPropsMapKeys> = {
  type: K;
  props: ContainersPropsMap[K];
  formStructure: FormStructure;
};

type Containers =
  | Container<"DrawerContainer">
  | Container<"ModalContainer">
  | Container<"TabContainer">
  | Container<"DivContainer">;
