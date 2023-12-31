import React from 'react';

export const Header = ({ theme, setTheme }) => {
  const toggleDarkMode = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
    localStorage.setItem(
      'theme',
      JSON.stringify(theme === 'dark' ? 'light' : 'dark')
    );
  };

  return (
    <header className='fixed top-0 left-0 right-0 bg-white dark:bg-black z-50'>
      <section className='flex items-center border-b border-dashed border-black dark:border-white justify-between min-h-[50px] gap-5 relative max-w-4xl mx-auto px-4'>
        <div className='font-bold'>Dalibor Popovic</div>
        <div className='flex items-center gap-4 max-md:ml-auto'>
          <a
            href='https://github.com/dalibor-popovic'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.0001 2.333C9.64482 2.33045 7.36563 3.16677 5.57097 4.69206C3.77631 6.21735 2.5835 8.33191 2.20631 10.6568C1.82912 12.9817 2.29221 15.3649 3.51258 17.3793C4.73295 19.3938 6.63083 20.9078 8.8661 21.65C9.3661 21.742 9.5441 21.435 9.5441 21.173C9.5441 20.936 9.5341 20.156 9.5301 19.328C6.7731 19.928 6.1921 18.159 6.1921 18.159C6.01013 17.5597 5.62002 17.0451 5.0921 16.708C4.1921 16.093 5.1611 16.108 5.1611 16.108C5.47531 16.1513 5.77549 16.2658 6.03874 16.4427C6.30199 16.6197 6.52135 16.8544 6.6801 17.129C6.81438 17.3734 6.99578 17.5888 7.21383 17.7627C7.43187 17.9366 7.68223 18.0656 7.95042 18.1421C8.21861 18.2186 8.49931 18.2412 8.77629 18.2086C9.05327 18.176 9.32103 18.0888 9.5641 17.952C9.60831 17.4493 9.83151 16.9791 10.1931 16.627C7.9931 16.377 5.6781 15.527 5.6781 11.727C5.66442 10.7423 6.0304 9.79007 6.7001 9.068C6.39653 8.21348 6.43051 7.27532 6.7951 6.445C6.7951 6.445 7.6271 6.179 9.5211 7.461C11.1453 7.01701 12.8589 7.01701 14.4831 7.461C16.3731 6.179 17.2001 6.445 17.2001 6.445C17.5662 7.2747 17.602 8.21283 17.3001 9.068C17.9695 9.79011 18.3348 10.7425 18.3201 11.727C18.3201 15.534 16.0011 16.371 13.7951 16.616C14.0313 16.8562 14.2135 17.1441 14.3295 17.4604C14.4456 17.7766 14.4928 18.114 14.4681 18.45C14.4681 19.776 14.4561 20.844 14.4561 21.17C14.4561 21.433 14.6351 21.742 15.1371 21.645C17.3689 20.9 19.2628 19.3852 20.4802 17.3717C21.6975 15.3582 22.1588 12.9773 21.7815 10.6549C21.4043 8.33247 20.2131 6.22 18.421 4.69534C16.629 3.17069 14.353 2.33331 12.0001 2.333Z'
                className='fill-[#000] dark:fill-[#fff]'
              />
            </svg>
          </a>
          <a
            href='https://linkedin.com/in/dalibor-popovic-76603b2a4'
            target='_blank'
            rel='noreferrer'
          >
            <svg
              width='15'
              height='15'
              viewBox='0 0 15 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7.979 5V6.586C8.31224 6.07902 8.77155 5.66737 9.31185 5.39143C9.85216 5.11549 10.4549 4.98474 11.061 5.012C14.3 5.012 15 7.03 15 9.655V15H12V10.262C12 9.132 11.771 7.678 10.005 7.678C8.292 7.678 8 8.908 8 10.178V15H5.009V5H7.979Z'
                className='fill-[#000] dark:fill-[#fff]'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M3 2.487C3 2.78367 2.91203 3.07368 2.74721 3.32035C2.58238 3.56703 2.34811 3.75929 2.07403 3.87282C1.79994 3.98635 1.49834 4.01606 1.20737 3.95818C0.916394 3.9003 0.649119 3.75744 0.43934 3.54766C0.229562 3.33788 0.0867006 3.07061 0.0288228 2.77963C-0.0290551 2.48866 0.000649929 2.18706 0.114181 1.91297C0.227713 1.63889 0.419972 1.40462 0.666645 1.2398C0.913319 1.07497 1.20333 0.987 1.5 0.987C1.89783 0.987 2.27936 1.14503 2.56066 1.42634C2.84197 1.70764 3 2.08917 3 2.487Z'
                className='fill-[#000] dark:fill-[#fff]'
              />
              <path
                d='M3 5.012H9.53493e-07V15H3V5.012Z'
                className='fill-[#000] dark:fill-[#fff]'
              />
            </svg>
          </a>
          <div
            className='border-l pl-2 cursor-pointer'
            onClick={toggleDarkMode}
          >
            {theme === 'dark' ? (
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M12 5V3M12 21V19M7.05 7.05L5.636 5.636M18.364 18.364L16.95 16.95M5 12H3M21 12H19M7.05 16.95L5.636 18.364M18.364 5.636L16.95 7.05M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z'
                  stroke='white'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            ) : (
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.509 7.75C11.5083 6.25717 11.903 4.7908 12.653 3.5C12.626 3.5 12.599 3.5 12.572 3.5C11.0794 3.49868 9.61279 3.89041 8.31965 4.63578C7.02652 5.38116 5.95245 6.4539 5.20548 7.74611C4.45851 9.03833 4.06498 10.5045 4.06445 11.997C4.06393 13.4896 4.45644 14.956 5.20251 16.2487C5.94858 17.5415 7.02189 18.615 8.31451 19.3612C9.60712 20.1075 11.0735 20.5003 12.566 20.5C14.0586 20.4997 15.5248 20.1064 16.8171 19.3597C18.1095 18.6129 19.1824 17.539 19.928 16.246C17.6884 16.2247 15.5477 15.3203 13.9713 13.7294C12.3948 12.1385 11.5099 9.98969 11.509 7.75Z'
                  stroke='black'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            )}
          </div>
        </div>
      </section>
    </header>
  );
};
