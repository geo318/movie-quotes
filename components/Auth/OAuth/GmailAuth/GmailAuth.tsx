import { Button } from 'components';

import { useOAuth } from './useGmailAuth';

const OAuth = () => {
  const { handleRedirect } = useOAuth();

  return (
    <Button
      typeButton
      text='Sign in with Google'
      className='w-full mt-4'
      onClick={handleRedirect}
    />
  );
};

export default OAuth;
