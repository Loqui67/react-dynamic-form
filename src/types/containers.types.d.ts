interface GenericContainerProps {
  children: FormStructure;
}

interface DrawerContainerProps extends GenericContainerProps {}
interface TabContainerProps extends GenericContainerProps {}
interface ModalContainerProps extends GenericContainerProps {}

type ContainersPropsMap = {
  DrawerContainer: DrawerContainerProps;
  ModalContainer: ModalContainerProps;
  TabContainer: TabContainerProps;
};

type ContainersPropsMapKeys = keyof ContainersPropsMap;

type Container<K extends ContainersPropsMapKeys = ContainersPropsMapKeys> = {
  type: K;
  props: ContainersPropsMap[K];
};
