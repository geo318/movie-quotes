import { AxiosError } from 'axios';

export type InitialAuthState = {
  isAuthenticated: boolean;
  registerErrors: AxiosError | any;
  loginErrors: AxiosError | any;
  user: { [kay: string]: string | boolean | number } | null;
};

export interface RootState {
  auth: InitialAuthState;
}

export type InitialError = {
  flashError: string[];
};
