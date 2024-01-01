import React from 'react';
import ManImage from '../../images/image-hero-desktop.png';
import { ReactComponent as Databiz } from '../../images/client-databiz.svg';
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg';
import { ReactComponent as Meet } from '../../images/client-meet.svg';
import { ReactComponent as Marker } from '../../images/client-maker.svg';
import { Button } from '../../UI/Button';

export const MainSection = () => {
  return (
    <section className='w-full flex m-6 justify-between'>
      <div className='relative text-left mt-12'>
        <h1 className='text-8xl font-black mt-60 whitespace-pre-line '>{`Make\n remote work`}</h1>
        <p className='text-medium-gray my-12 w-[568px] text-lg'>
          {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo et, enim porro doloribus,
          error officia doloremque magni illum aliquid non cumque, perspiciatis omnis amet odio
          dolorum odit eveniet quia quidem?`}
        </p>
        <Button size={'lg'} variant={'black'}>
          Lean more
        </Button>
        <div className='flex items-center justify-around absolute bottom-2 w-full '>
          <Databiz />
          <Audiophile />
          <Meet />
          <Marker />
        </div>
      </div>
      <div className='flex w-1/2 mt-20'>
        <img src={ManImage} alt='Man' />
      </div>
    </section>
  );
};
