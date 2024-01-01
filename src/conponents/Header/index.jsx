import React from 'react';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { NavItem } from '../NavItem';

import { COMPANY } from '../Header/constants';
import { FEATURES } from '../Header/constants';
import { NavMenu } from '../NavMenu/NavMenu';
import { Button } from '../../UI/Button';

export const Header = () => {
  return (
    <header className='flex py-3 items-center'>
      <LogoIcon />
      <nav className='flex space-x-6 ml-8 flex-shrink-1'>
        <NavItem text={'Feautures'}>
          <NavMenu items={FEATURES} />
        </NavItem>
        <NavItem text={'Company'}>
          <NavMenu items={COMPANY} />
        </NavItem>
        <NavItem text={'Careers'} />
        <NavItem text={'About'} />
      </nav>
      <div className='ml-auto'>
        <Button size={'md'} variant={'without'}>
          Login
        </Button>
        <Button size={'lg'} variant={'outline'}>
          Register
        </Button>
      </div>
    </header>
  );
};
