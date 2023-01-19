import { Button, G } from 'components';
import { FC } from 'react';

import { useOAuth } from './useGmailAuth';

const OAuth: FC<{ text: string }> = ({ text }) => {
  const { handleRedirect } = useOAuth();

  return (
    <Button
      typeButton
      text={text}
      className='w-full mt-4 flex gap-2 justify-center items-center'
      onClick={handleRedirect}
    >
      <G />
    </Button>
  );
};

export default OAuth;
