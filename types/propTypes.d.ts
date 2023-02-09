import React, { LegacyRef, RefObject } from 'react';

export interface Props {
  children?: React.ReactNode;
  className?: string;
  refObj?: LegacyRef<T> | undefined;
}

export interface NavbarProps extends Props {
  admin?: boolean;
}

type SubmitDataProps = {
  data: {
    [key: string]: string | number | boolean;
  };
};
