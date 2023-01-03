import { useQuery, dehydrate, QueryClient } from 'react-query';
import { getQuotes } from 'services';

export const useQuotes = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: 'quotes',
    queryFn: getQuotes,
  });
  return {
    quotes: data?.data!.collection,
    isLoading,
    isError,
    error,
  };
};

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery('quotes', getQuotes);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
