import React from 'react';
import { MenuItem } from '../MenuItem/MenuItem';

export const NavMenu = ({ items = [] }) => {
  return (
    <div className='flex flex-col py-2 px-4 drop-shadow-xl bg-almost-white rounded-lg absolute top-10 right-0 w-36 z-30 space-y-2'>
      {items.map(({ text, icon }) => (
        <MenuItem text={text} icon={icon} />
      ))}
    </div>
  );
};
