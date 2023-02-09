import { FC } from 'react';
import { Props } from 'types';

const Divider: FC<Props> = ({ className = '' }) => (
  <p
    className={`flex border-b border-[#EFEFEF] border-opacity-[.3] ${className}`}
  ></p>
);
export default Divider;
