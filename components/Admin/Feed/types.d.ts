import { Comment, FeedData, Like, Movie, UserData } from 'types';

export interface FeedProps {
  data: array<FeedData>;
  nextPage: () => void;
  loading: boolean;
  refetch?: () => void;
}

export type UseFeedProps = {
  nextPage: () => void;
  loading: boolean;
};
