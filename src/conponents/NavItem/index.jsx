import React, { useEffect, useRef, useState } from 'react';
import { ReactComponent as ArrowDownIcon } from '../../images/icon-arrow-down.svg';
import { ReactComponent as ArrowUpIcon } from '../../images/icon-arrow-up.svg';

export const NavItem = ({ text = '', children }) => {
  const [selected, setSelected] = useState(false);
  const navItemRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navItemRef.current && !navItemRef.current.contains(event.target)) {
        setSelected(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [navItemRef]);

  return (
    <div className='relative' ref={navItemRef}>
      <div
        className='flex space-x-2 cursor-pointer items-center'
        onClick={() => setSelected(!selected)}
      >
        <span className='text-medium-gray hover:text-almost-black'>{text}</span>
        {children && (!selected ? <ArrowDownIcon /> : <ArrowUpIcon />)}
      </div>
      <span onClick={() => setSelected(false)}>{selected && children}</span>
    </div>
  );
};
