import { Button, Heading, Icon404, Layout } from 'components';
import { NextPage } from 'next';
import Link from 'next/link';

const Custom404: NextPage = () => {
  return (
    <Layout className='min-h-screen flex-col items-center justify-center'>
      <Icon404 />
      <Heading
        heading='Whoops!'
        sub="We can't see the page you are looking for"
        className='mt-7'
        error
      />
      <Link href='/' className='mt-6'>
        <Button text='Return home' style='buttonRed' />
      </Link>
    </Layout>
  );
};

export default Custom404;
