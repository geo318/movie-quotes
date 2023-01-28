import React, { RefObject } from 'react';

export interface Props {
  children?: React.ReactNode;
  className?: string;
  ref?: Element | HTMLFormElement | null | RefObject<HTMLFormElement>;
}

export interface NavbarProps extends Props {
  admin?: boolean;
}

type SubmitDataProps = {
  data: {
    [key: string]: string | number | boolean;
  };
};
