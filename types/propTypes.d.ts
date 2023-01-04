import React, { RefObject } from 'react';

export interface Props {
  children?: React.ReactNode;
  className?: string;
}

export interface LayoutProps extends Props {
  padding?: boolean;
  background?: boolean;
}

export interface ClickProps extends Props {
  onClickOutside: () => void;
  select: RefObject<HTMLInputElement>;
}

export interface SelectProps extends Props {
  name?: string;
  placeholder?: string;
  value?: string;
  modalClassName?: string;
  face?: React.ReactNode;
}
