import { ProfileSubmitProps } from 'types';

export type ProfileInputProps = {
  name?: string;
  label?: string;
  placeholder?: string;
  control?: string;
  primary?: boolean;
  verify?: boolean;
  verified?: boolean;
  full?: boolean;
  value?: string;
  setFormState?: (state: ProfileSubmitProps) => {};
  cancel?: boolean;
  editable?: boolean;
  password?: boolean;
  refetch?: () => {};
};
