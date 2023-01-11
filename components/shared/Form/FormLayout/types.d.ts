import { Props, SubmitDataProps } from 'types';

interface FormLayoutProps extends Props {
  onSubmit?: (data: SubmitDataProps) => Promise<void>;
}
