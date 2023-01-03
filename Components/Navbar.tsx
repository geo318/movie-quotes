import { Layout, Button } from 'Components';

const Navbar = () => {
  return (
    <div className='py-6 relative top-0 w-full backdrop-blur-xl'>
      <Layout background={false} className='flex-row w-full items-center'>
        <div className='uppercase text-app-yellow'>Movie Quotes</div>
        <nav className='flex ml-auto gap-5 items-center'>
          <div>Eng</div>
          <Button text='Sign Up' style='buttonRed' className='text-base' />
          <Button text='Log in' className='text-base' />
        </nav>
      </Layout>
    </div>
  );
};

export default Navbar;
