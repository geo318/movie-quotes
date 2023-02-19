import { LegacyRef } from 'react';
import { FeedData } from 'types';

interface Post {
  post: array<FeedData | undefined>;
  lastFeedElementRef?: LegacyRef<HTMLDivElement>;
  modal?: boolean;
}
