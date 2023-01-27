export interface FeedProps {
  data: array<FeedData>;
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
  user: User;
};

type User = { id: number; avatar: string; username: string };

type Comment = {
  id: number;
  user_id: number;
  quote_id: number;
  comment: string;
  user: User;
};

type Like = {
  id: number;
  quote_id: number;
  like: number;
};

type Movie = {
  id: number;
  movie_title: number;
  movie_image: string;
  year: number;
};
