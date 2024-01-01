import React from 'react';

export const MenuItem = ({ text = '', icon }) => {
  return (
    <div className='flex gap-4 items-center w-full'>
      {icon}
      <span className='text-medium-gray cursor-pointer hover:text-almost-black'>{text}</span>
    </div>
  );
};
