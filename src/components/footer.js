import React from 'react';

export const Footer = () => {
  return (
    <footer className='pt-8'>
      <section className='container flex items-center border-t dark:border-white border-black border-dashed max-w-4xl mx-auto px-4 min-h-[60px]'>
        <p> Made with &#x2665; </p>
        <p className='ml-auto'>
          Dalibor Popovic &#169; {new Date().getFullYear()}
        </p>
      </section>
    </footer>
  );
};
