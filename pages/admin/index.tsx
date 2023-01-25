import { AdminLayout, Feed } from 'components';
import { GetServerSideProps } from 'next';
import { dehydrate, QueryClient } from 'react-query';
import { checkUser, getQuotes, getUser } from 'services';

const Admin = () => {
  return (
    <AdminLayout>
      <Feed data={{} as FeedData} />
    </AdminLayout>
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
