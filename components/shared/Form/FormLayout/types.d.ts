import { Props } from 'types';

interface FormLayoutProps extends Props {
  onSubmit?: (data: {
    [key: string]: string | number | boolean;
  }) => Promise<void>;
}
