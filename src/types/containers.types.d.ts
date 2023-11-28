interface GenericContainerProps {
  children?: React.ReactNode;
}

interface DivContainerProps extends GenericContainerProps {
  div?: string;
}
interface DrawerContainerProps extends GenericContainerProps {
  drawer?: string;
}
interface TabContainerProps extends GenericContainerProps {
  tab?: string;
}
interface ModalContainerProps extends GenericContainerProps {
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
  props: ContainerProps<K>;
};

type ContainerProps<K extends ContainersPropsMapKeys> = Omit<
  ContainersPropsMap[K],
  "children"
> & {
  formStructure: FormStructure;
};
