import { AxiosError } from 'axios';
import { gmailAuth } from 'services';
import { FormSubmitProps } from './formTypes';

export type DataProp = number | string | boolean;

export type LocalDataObj = { [key: string]: DataProp };

export type LocalData = DataProp | LocalDataObj;

export type InitialAuthState = {
  isAuthenticated: boolean;
  formErrors: AxiosError | any;
  loginErrors: AxiosError | any;
  user: User;
};

export type User = {
  username: string;
  email: string;
  avatar: string;
  gmail: string;
} | null;

export interface RootState {
  auth: InitialAuthState;
}

export type InitialError = {
  flashError: string[];
};
