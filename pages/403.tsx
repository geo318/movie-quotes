import { Button, Layout, Heading, Icon403 } from 'components';
import Link from 'next/link';

const Custom403 = () => {
  return (
    <Layout className='min-h-screen flex-col items-center justify-center'>
      <div className='max-w-[15rem]'>
        <Icon403 />
      </div>
      <Heading
        heading='You shall not pass!'
        sub='Sorry, but  you don’t have permission to access this page'
        className='mt-7'
        error
      />
      <Link href='/' className='mt-6'>
        <Button text='Return home' style='buttonRed' />
      </Link>
    </Layout>
  );
};

export default Custom403;
