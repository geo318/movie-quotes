import { Logout } from 'components';
import { useAuth } from 'hooks';
import { GetServerSideProps } from 'next';
import { getUser } from 'services';
import instance from 'services/axios';

const Admin = ({ res, cookies }) => {
  // useAuth();
  // console.log(res, cookies);
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
}) => {
  // const xsrf = req.cookies?.['XSRF-TOKEN'];
  const cookies = req.headers.cookie;

  const res = await getUser();
  // const { user } = await res.data;
  console.log(res);
  // if (!user.id)
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   };

  return {
    props: { cookies },
  };
};
