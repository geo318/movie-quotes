import Router from 'next/router';
import { useQuery } from 'react-query';
import { gmailAuth } from 'services';

export const useOAuth = () => {
  const { data } = useQuery({ queryFn: gmailAuth, retry: 1 });
  const url = data?.data.url;
  const handleRedirect = () => Router.push(url || '/');

  return { handleRedirect };
};
