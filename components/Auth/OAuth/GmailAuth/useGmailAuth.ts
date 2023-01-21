import Router from 'next/router';
import { useQuery } from 'react-query';
import { gmailAuth } from 'services';

export const useOAuth = () => {
  const { data } = useQuery({ queryFn: gmailAuth });
  const url = data?.data.url;
  const handleRedirect = () => Router.push(url || '/');

  return { handleRedirect };
};
