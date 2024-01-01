import React from 'react';

export const MenuItem = ({ text = '', icon }) => {
  return (
    <span className='flex gap-4 items-center'>
      {icon}
      {text}
    </span>
  );
};
