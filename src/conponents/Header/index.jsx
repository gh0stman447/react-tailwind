import React from 'react';
import { ReactComponent as LogoIcon } from '../../images/logo.svg';
import { NavItem } from '../NavItem';

import { COMPANY } from '../Header/constants';
import { FEATURES } from '../Header/constants';
import { NavMenu } from '../NavMenu/NavMenu';

export const Header = () => {
  return (
    <header className='flex'>
      <LogoIcon />
      <nav className='flex space-x-6 ml-8'>
        <NavItem text={'Feautures'}>
          <NavMenu items={FEATURES} />
        </NavItem>
        <NavItem text={'Company'}>
          <NavMenu items={COMPANY} />
        </NavItem>
        <NavItem text={'Careers'} />
        <NavItem text={'About'} />
      </nav>
    </header>
  );
};
