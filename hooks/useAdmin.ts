import { useQuery } from 'react-query';
import { getQuotes, getUser } from 'services';

export const useAdmin = () => {
  const { data: quotesData } = useQuery({
    queryKey: 'quotes',
    queryFn: getQuotes,
  });
  const { data: userData } = useQuery({
    queryKey: 'user',
    queryFn: getUser,
  });

  return { quotesData, userData };
};
