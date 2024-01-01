import React, { useState } from 'react';
import { ReactComponent as ArrowDownIcon } from '../../images/icon-arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../../images/icon-arrow-up.svg';

export const NavItem = ({ text = '', children }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div className='relative'>
      <div
        className='flex space-x-2 cursor-pointer items-center'
        onClick={() => setSelected(!selected)}
      >
        <span className='text-medium-gray hover:text-almost-black'>{text}</span>
        {children && (!selected ? <ArrowDownIcon /> : <ArrowUpIcon />)}
      </div>
      {selected && children}
    </div>
  );
};
