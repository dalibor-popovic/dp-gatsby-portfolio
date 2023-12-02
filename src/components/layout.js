import React from 'react';

export const Layout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <main className='dark:bg-black bg-white text-black dark:text-white'>
          {children}
        </main>
      </body>
    </html>
  );
};
