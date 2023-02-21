import { AxiosError } from 'axios';
import { gmailAuth } from 'services';
import { string } from 'zod';
import { AddCommentProps, FormSubmitProps } from './formTypes';
import { ProfileSubmitProps, Props } from './propTypes';

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
  id: number;
  username: string;
  email: string;
  primary_email: string;
  email_verified_at: string;
  avatar: string;
  gmail: string;
  emails: {
    id: number;
    user_id: number;
    email: string;
    email_verified_at: string;
  }[];
};

export type FeedData = {
  id: number;
  movie_id: number;
  user_id: number;
  quote_image: string;
  quote_title: { en: string; ka: string };
  movie: array<Movie>;
  comments: array<Comment>;
  likes: array<Like>;
  user: UserData;
};

export interface RootState {
  auth: InitialAuthState;
  feed: { feedData: FeedData[]; query: string };
  note: { notifications: Notification[] };
  movie: { movies: Movie[]; query: string };
  quote: { quote: FeedData };
  flash: { flash: string; isLoading: boolean };
  profile: { activeInput: ProfileSubmitProps[]; active: boolean };
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

interface Translation {
  en: string;
  ka: string;
}

export type Movie = {
  id: number;
  movie_title: Translation;
  movie_image: string;
  year: number;
  quotes: FeedData[];
  description: Translation;
  director: Translation;
  budget: string;
  genres: Genre[];
};

export type ToggleLike = { quoteId: number; userId: number };
export interface AddComment extends AddCommentProps {
  user: User;
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

export interface InputProps extends Props {
  name: string;
  onChange?: React.FormEvent<HTMLInputElement>;
  label?: string;
  labelStyle?: string;
  placeholder?: string;
  type?: string;
  value?: string | number | array<T>;
  validation?: {
    [key: string]:
      | {
          [key: string]: string | number | boolean | RegExp;
        }
      | number;
  };
  inputStyle?: string;
  asterisk?: boolean;
  submit?: boolean;
  select?: boolean;
  error?: string;
  rows?: number;
}

type Genre = {
  id: number;
  name: Translation;
};
