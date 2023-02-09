import { AxiosError } from 'axios';
import { FeedData } from 'components/Admin/Feed/types';
import { gmailAuth } from 'services';
import { AddCommentProps, FormSubmitProps } from './formTypes';

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
  feed: { feedData: FeedData[] };
  note: { notifications: Notification[] };
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
  user_id: number;
  like: number;
};

export type Movie = {
  id: number;
  movie_title: string;
  movie_image: string;
  year: number;
};

export type ToggleLike = { quoteId: number; userId: number };
export interface AddComment extends AddCommentProps {
  user: UserData;
}

export type Notification = {
  id: number;
  quote_id: number;
  user: UserData;
  destination_user_id: number;
  read: 0 | 1;
  created_at: string;
  comment_id: number | null;
  like_id: number | null;
  comment: AddComment | null;
};
