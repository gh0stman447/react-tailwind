import React from 'react';
import ManImage from '../../images/image-hero-desktop.png';
import ManImageMobile from '../../images/image-hero-mobile.png';
import { ReactComponent as Databiz } from '../../images/client-databiz.svg';
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg';
import { ReactComponent as Meet } from '../../images/client-meet.svg';
import { ReactComponent as Marker } from '../../images/client-maker.svg';
import { Button } from '../../UI/Button';

export const MainSection = () => {
  return (
    <section className='w-full flex-col xl:flex-row flex mt-6 justify-between'>
      <div className='relative text-center xl:mt-60 xl:text-left mt-12 order-2 xl:order-1'>
        <h1 className='text-3xl mt-6 xl:text-8xl font-black xl:whitespace-pre-line '>{`Make\n remote work`}</h1>
        <p className='text-medium-gray my-12 text-lg whitespace-pre-line'>
          {`Lorem ipsum dolor, sit amet consectetur adipisicing elit.\n Amet ullam dolorum animi atque vitae exercitationem\n quibusdam maiores adipisci qui harum.`}
        </p>
        <Button size={'lg'} variant={'black'}>
          Lean more
        </Button>
        <div className='flex items-center justify-between mt-20 xl:absolute bottom-2 w-full '>
          <Databiz />
          <Audiophile />
          <Meet />
          <Marker />
        </div>
      </div>
      <div className='hidden flex w-1/2 mt-20 xl:order-2 xl:flex '>
        <img src={ManImage} alt='Man' />
      </div>
      <div className='flex xl:hidden w-full mt-20 order-1 justify-center mb-8'>
        <img src={ManImageMobile} alt='Man' />
      </div>
    </section>
  );
};
