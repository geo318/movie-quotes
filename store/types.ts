import { AxiosError } from 'axios';

export type InitialAuthState = {
  isAuthenticated: boolean;
  registerErrors: AxiosError | any;
  loginErrors: AxiosError | any;
};

export interface RootState {
  auth: InitialAuthState;
}
