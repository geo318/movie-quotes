import { AdminLayout, Feed } from 'components';
import { useAdmin } from 'hooks';
import { GetServerSideProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { dehydrate, QueryClient } from 'react-query';
import { checkUser, getQuotes, getUser } from 'services';

const Admin = () => {
  const { quotes } = useAdmin();

  console.log(quotes);
  return (
    <AdminLayout>
      <Feed data={quotes as FeedData[]} />
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

  const translation = await serverSideTranslations(locale as string, [
    'shared',
    'home',
  ]);

  return {
    props: { dehydratedState: dehydrate(queryClient), ...translation },
  };
};
