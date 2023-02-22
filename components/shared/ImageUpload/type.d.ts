import { InputProps, ProfileSubmitProps } from 'types';

export type ImageUpProps = InputProps & {
  image?: string;
  handleImage: (img: string) => void;
  reUpload?: boolean;
  path?: string;
  cancel?: boolean;
  name?: string;
  setFormState?: (state: ProfileSubmitProps) => void;
};
