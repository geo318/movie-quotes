import { FC } from 'react';
import { Props } from 'types';

const Divider: FC<Props> = ({ className = '' }) => (
  <p
    className={` ${className} flex border-b border-[#EFEFEF] border-opacity-[.3]`}
  ></p>
);
export default Divider;
