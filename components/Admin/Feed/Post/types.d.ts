import { FeedData } from 'types';

interface Post {
  post: array<FeedData | undefined>;
  lastFeedElementRef?: (node: Element) => void;
  modal?: boolean;
}
