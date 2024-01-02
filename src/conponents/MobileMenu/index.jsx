import React from 'react';
import { NavItem } from '../NavItem';
import { COMPANY, FEATURES } from '../Header/constants';
import { MenuItem } from '../MenuItem';
import { Button } from '../../UI/Button';

export const MobileMenu = ({ isOpen = false }) => {
  return (
    <>
      <div
        className={` absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${
          isOpen ? 'flex' : 'hidden'
        }`}
      ></div>
      <div
        className={`absolute top-0 right-0 w-1/2 z-20 justify-center bg-white  min-h-[150vh] ${
          isOpen ? 'flex' : 'hidden'
        }`}
      >
        <nav className='my-20 mx-5 space-y-5 text-lg w-full'>
          <NavItem text='Features'>
            <div className='flex flex-col space-y-5 p-2'>
              {FEATURES.map(({ text, icon }) => (
                <MenuItem text={text} icon={icon} key={text} />
              ))}
            </div>
          </NavItem>
          <NavItem text={'Company'}>
            <div className='flex flex-col space-y-5 p-2'>
              {COMPANY.map(({ text, icon }) => (
                <MenuItem text={text} icon={icon} key={text} />
              ))}
            </div>
          </NavItem>
          <NavItem text={'Careers'} />
          <NavItem text={'About'} />
          <div className='flex flex-col space-y-5'>
            <Button variant={'without'} size={'md'}>
              Loggin
            </Button>
            <Button variant={'outline'} size={'md'}>
              Register
            </Button>
          </div>
        </nav>
      </div>
    </>
  );
};
