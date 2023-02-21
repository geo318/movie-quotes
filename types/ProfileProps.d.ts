import { User } from './types';

export type ProfileSubmitProps = 'user_avatar' | 'username' | 'password';

export interface ProfileProps {
  user: User;
  refetch: () => {};
  formState: boolean;
  setFormState: (state?: ProfileSubmitProps) => void;
}
