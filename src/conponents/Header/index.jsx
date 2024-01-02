import React, { useState } from 'react';
import { NavItem } from '../NavItem';

import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg';
import { ReactComponent as MenuCloseIcon } from '../../images/icon-close-menu.svg';
import { COMPANY, FEATURES } from '../Header/constants';
import { NavMenu } from '../NavMenu/NavMenu';
import { Button } from '../../UI/Button';
import { MobileMenu } from '../MobileMenu';

export const Header = () => {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  return (
    <header className='flex py-3 items-center'>
      <LogoIcon />
      <nav className='hidden xl:flex space-x-6 ml-8 flex-shrink-1'>
        <NavItem text={'Feautures'}>
          <NavMenu items={FEATURES} />
        </NavItem>
        <NavItem text={'Company'}>
          <NavMenu items={COMPANY} />
        </NavItem>
        <NavItem text={'Careers'} />
        <NavItem text={'About'} />
      </nav>
      <div className='hidden xl:flex ml-auto'>
        <Button size={'md'} variant={'without'}>
          Login
        </Button>
        <Button size={'lg'} variant={'outline'}>
          Register
        </Button>
      </div>
      <div
        className='flex ml-auto cursor-pointer z-30 xl:hidden'
        onClick={() => SetIsModalOpen((prev) => !prev)}
      >
        {!isModalOpen ? <MenuIcon /> : <MenuCloseIcon />}
      </div>
      <MobileMenu isOpen={isModalOpen} />
    </header>
  );
};
