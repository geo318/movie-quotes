export type DialogProps = {
  toggleDialog: (bool: boolean) => void;
  handleFormError: (bool: boolean) => void;
  trigger: boolean;
  handleTrigger: () => void;
  open: boolean;
};
