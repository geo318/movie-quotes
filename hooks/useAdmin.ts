import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getQuotes, getUser } from 'services';
import { authActions } from 'store';

export const useAdmin = () => {
  const { data: quotesData, isSuccess } = useQuery({
    queryKey: 'quotes',
    queryFn: getQuotes,
  });
  const { data: userData } = useQuery({
    queryKey: 'user',
    queryFn: getUser,
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authActions.setUser(userData?.data.user));
  }, [dispatch, userData]);

  return { quotesData, userData };
};
