interface FeedProps {
  data: FeedData;
}

type FeedData = {
  quote: {
    title: string;
    image: string;
    impressions: { comments: number; likes: number };
    author: { name: string; avatar: string };
  };
  movie: { title: string; year: string };
  comments: array<{
    author: { name: string; avatar: string };
    comment: string;
  }>;
};
