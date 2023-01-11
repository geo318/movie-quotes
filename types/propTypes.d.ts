import React from 'react';

export interface Props {
  children?: React.ReactNode;
  className?: string;
}

type SubmitDataProps = {
  data: {
    [key: string]: string | number | boolean;
  };
};
