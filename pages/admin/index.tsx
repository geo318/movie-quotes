import { Logout } from 'components';
import { useRouter } from 'next/router';
const Admin = () => {
  const router = useRouter();

  return (
    <div className='text-black bg-app-slide-one bg-fixed'>
      <div>admin</div>
      <Logout />
    </div>
  );
};

export default Admin;
