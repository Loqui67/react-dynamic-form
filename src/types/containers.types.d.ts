interface DivContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  div?: string;
}
interface DrawerContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  drawer?: string;
}
interface TabContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  tab?: string;
}
interface ModalContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  modal?: string;
}

type ContainersPropsMap = {
  DrawerContainer: DrawerContainerProps;
  ModalContainer: ModalContainerProps;
  TabContainer: TabContainerProps;
  DivContainer: DivContainerProps;
};

type ContainersPropsMapKeys = keyof ContainersPropsMap;

type Container<K extends ContainersPropsMapKeys = ContainersPropsMapKeys> = {
  type: K;
  props: WithChildren<ContainerProps<K>>;
};

type ContainerProps<K extends ContainersPropsMapKeys> = WithoutChildren<
  ContainersPropsMap[K]
> & {
  formStructure: FormStructure;
};
