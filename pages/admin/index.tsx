import { Logout } from 'components';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { checkUser, getQuotes, getUser } from 'services';

const Admin = () => {
  const { data: quotesData } = useQuery({
    queryKey: 'quotes',
    queryFn: getQuotes,
  });
  const { data: userData } = useQuery({
    queryKey: 'user',
    queryFn: getQuotes,
  });

  return (
    <>
      <div className='text-black'>
        <div>admin</div>
        <Logout />
      </div>
    </>
  );
};

export default Admin;

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
  res,
}) => {
  res.setHeader('set-cookie', ['access-token=1']);
  try {
    const cookies = req.headers.cookie;
    await checkUser({ cookies });
  } catch {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('user', getUser);
  await queryClient.prefetchQuery('quotes', getQuotes);

  return {
    props: { dehydratedState: dehydrate(queryClient) },
  };
};
