import { LegacyRef } from 'react';
import { FeedData } from 'types';

interface Post {
  post: FeedData[];
  lastFeedElementRef: LegacyRef<Element>;
}
