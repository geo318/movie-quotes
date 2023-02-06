import { Comment, Like, Movie, UserData } from 'types';

export interface FeedProps {
  data: array<FeedData>;
  nextPage: () => void;
  loading: boolean;
  refetch?: () => void;
}

export type FeedData = {
  id: number;
  movie_id: number;
  user_id: number;
  quote_image: string;
  quote_title: string;
  movie: array<Movie>;
  comments: array<Comment>;
  likes: array<Like>;
  user: UserData;
};

export type UseFeedProps = {
  nextPage: () => void;
  loading: boolean;
};
