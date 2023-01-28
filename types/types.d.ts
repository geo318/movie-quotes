import { AxiosError } from 'axios';
import { gmailAuth } from 'services';
import { FormSubmitProps } from './formTypes';

export type DataProp = number | string | boolean;

export type LocalDataObj = { [key: string]: DataProp };

export type LocalData = DataProp | LocalDataObj;

export type AuthState = {
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

export type UserData = { id: number; avatar: string; username: string };

export type Comment = {
  id: number;
  user_id: number;
  quote_id: number;
  comment: string;
  user: UserData;
};

export type Like = {
  id: number;
  quote_id: number;
  like: number;
};

export type Movie = {
  id: number;
  movie_title: number;
  movie_image: string;
  year: number;
};
