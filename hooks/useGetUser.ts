import { useEffect } from 'react';
import { useQuery } from 'react-query';
import { useDispatch } from 'react-redux';
import { getUser } from 'services';
import { authActions } from 'store';

export const useGetUser = () => {
  const dispatch = useDispatch();
  const { data: userData, refetch } = useQuery({
    queryKey: 'user',
    queryFn: getUser,
    retry: 1,
  });
  useEffect(() => {
    if (!userData?.data.user.id) return;
    dispatch(authActions.setUser(userData?.data.user));
  }, [dispatch, userData]);
  return { refetch };
};
