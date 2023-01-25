import React from 'react';

export interface Props {
  children?: React.ReactNode;
  className?: string;
}

export interface NavbarProps extends Props {
  admin?: boolean;
}

type SubmitDataProps = {
  data: {
    [key: string]: string | number | boolean;
  };
};
