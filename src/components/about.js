import { StaticImage as Image } from 'gatsby-plugin-image';
import React from 'react';

export const About = () => {
  return (
    <section className='container mx-auto max-w-4xl px-4 flex flex-wrap-reverse justify-center gap-8 md:py-16'>
      <div className='w-fit md:flex-[0.5] overflow-hidden relative border-2 border-black dark:border-white bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)]'>
        <Image
          src='../images/office-work.png'
          alt='laptop javascript code'
          width={420}
          height={280}
          className='hover:translate-x-1 hover:-translate-y-1 transition duration-200 ease-out'
        />
      </div>
      <div className='md:flex-[0.5]'>
        <h3 className='font-bold text-amber-500'>ABOUT ME</h3>
        <h2 className='text-3xl font-bold pt-2'>
          Passionate web developer based in Belgrade, Serbia
        </h2>
        <p className='text-gray-400 pt-2'>
          I make web applications, usually with React. I enjoy learning new
          technologies and upgrading my skills. Wanna ever chat about code, or
          anything else... feel free to reach me.
        </p>
      </div>
    </section>
  );
};
