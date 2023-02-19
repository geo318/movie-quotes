export interface MovieQuoteProps {
  refetch: () => {};
  quotes: FeedData[];
  isLoading: boolean;
  lang: 'en' | 'ka';
  id?: string | string[];
}
