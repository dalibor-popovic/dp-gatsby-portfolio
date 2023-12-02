import { StaticImage as Image } from 'gatsby-plugin-image';
import React from 'react';

export const Projects = () => {
  return (
    <section className='container max-w-4xl mx-auto md:py-8 px-4 py-16'>
      <h3 className='font-bold text-amber-500'>PROJECTS</h3>
      <div className='flex pt-2 flex-wrap justify-center gap-8'>
        <div className='md:flex-[0.5]'>
          <h2 className='text-3xl font-bold'>Artivisual</h2>
          <p className='text-gray-400'>
            This platform seamlessly merges the content of one image with the
            distinctive style of another, resulting unique compositions. I
            played a pivotal role in shaping the frontend, ensuring a seamless
            user experience.
          </p>
          <div className='flex justify-center md:justify-start gap-4 pt-2'>
            <a
              href='https://www.artivisual.app/'
              target='_blank'
              rel='noopener'
              className='relative inline-block px-3 py-1 font-medium group text-sm'
            >
              <span className='absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
              <span className='absolute rounded-lg inset-0 w-full h-full bg-white dark:bg-black border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white'></span>
              <span className='relative flex gap-2 items-center text-black dark:text-white group-hover:text-white dark:group-hover:text-black'>
                Live preview
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.0003 9.33334V12.5553C12.0004 12.6575 11.9804 12.7587 11.9413 12.8532C11.9022 12.9476 11.8449 13.0334 11.7727 13.1057C11.7004 13.1779 11.6146 13.2352 11.5202 13.2743C11.4257 13.3134 11.3245 13.3334 11.2223 13.3333H3.44499C3.3428 13.3334 3.24159 13.3134 3.14716 13.2743C3.05273 13.2352 2.96693 13.1779 2.89467 13.1057C2.82241 13.0334 2.7651 12.9476 2.72604 12.8532C2.68697 12.7587 2.6669 12.6575 2.66699 12.5553V4.77801C2.6669 4.67581 2.68697 4.5746 2.72604 4.48017C2.7651 4.38574 2.82241 4.29994 2.89467 4.22768C2.96693 4.15542 3.05273 4.09812 3.14716 4.05905C3.24159 4.01998 3.3428 3.99992 3.44499 4.00001H6.52366M9.48833 2.66667H13.3337V6.512M8.07433 7.92601L13.2597 2.74067'
                    className='stroke-[#000] group-hover:stroke-[#fff] dark:stroke-[#fff] dark:group-hover:stroke-[#000]'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className='w-fit md:flex-[0.5] overflow-hidden md:ml-auto border-2 border-black dark:border-white bg-black dark:bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)]'>
          <a href='https://www.artivisual.app/' target='_blank' rel='noopener'>
            <Image
              className='hover:translate-x-1 hover:translate-y-1 transition duration-200 ease-out'
              src='../images/artivisual.png'
              alt='Artivisual'
              width={420}
              height={280}
            />
          </a>
        </div>
      </div>
      <div className='flex pt-16 flex-wrap-reverse justify-center gap-8'>
        <div className='w-fit md:flex-[0.5] overflow-hidden md:ml-auto border-2 border-black dark:border-white bg-black dark:bg-white shadow-[6px_6px_0px_rgba(0,0,0,1)] dark:shadow-[6px_6px_0px_rgba(255,255,255,1)]'>
          <a
            href='https://team-sync-2e072.web.app'
            target='_blank'
            rel='noopener'
          >
            <Image
              className='hover:translate-x-1 hover:translate-y-1 transition duration-200 ease-out'
              src='../images/teamsync.png'
              alt='Teamsync'
              width={420}
              height={280}
            />
          </a>
        </div>
        <div className='md:flex-[0.5]'>
          <h2 className='text-3xl font-bold'>Teamsync</h2>
          <p className='text-gray-400'>
            Dive into the future of team collaboration with{' '}
            <strong>Teamsync</strong>, a prototype team chat application
            spotlighting my prowess in frontend development. This innovative
            prototype offers a glimpse into a seamless communication experience,
            designed to showcase the power of intuitive design and user-friendly
            interfaces.
          </p>
          <div className='flex justify-center md:justify-start gap-4 pt-2'>
            <a
              href='https://github.com/dalibor-popovic/team-sync-vite'
              target='_blank'
              rel='noopener'
              className='relative inline-block px-3 py-1 font-medium group text-sm'
            >
              <span className='absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
              <span className='absolute rounded-lg inset-0 w-full h-full bg-white dark:bg-black border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white'></span>
              <span className='relative flex gap-2 items-center text-black dark:text-white group-hover:text-white dark:group-hover:text-black'>
                Code
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M8.00023 1.55533C6.43004 1.55364 4.91058 2.11118 3.71414 3.12804C2.5177 4.1449 1.7225 5.5546 1.47104 7.10452C1.21958 8.65444 1.5283 10.2432 2.34188 11.5862C3.15546 12.9292 4.42072 13.9385 5.91089 14.4333C6.24423 14.4947 6.36289 14.29 6.36289 14.1153C6.36289 13.9573 6.35623 13.4373 6.35356 12.8853C4.51556 13.2853 4.12823 12.106 4.12823 12.106C4.00692 11.7064 3.74684 11.3634 3.39489 11.1387C2.79489 10.7287 3.44089 10.7387 3.44089 10.7387C3.65037 10.7675 3.85049 10.8439 4.02599 10.9618C4.20149 11.0798 4.34773 11.2363 4.45356 11.4193C4.54308 11.5823 4.66402 11.7259 4.80938 11.8418C4.95475 11.9577 5.12165 12.0437 5.30044 12.0947C5.47923 12.1458 5.66637 12.1608 5.85102 12.1391C6.03568 12.1173 6.21418 12.0592 6.37623 11.968C6.4057 11.6328 6.5545 11.3194 6.79556 11.0847C5.32889 10.918 3.78556 10.3513 3.78556 7.818C3.77644 7.16151 4.02043 6.52672 4.46689 6.04533C4.26451 5.47565 4.28717 4.85021 4.53023 4.29667C4.53023 4.29667 5.08489 4.11933 6.34756 4.974C7.43036 4.67801 8.57276 4.67801 9.65556 4.974C10.9156 4.11933 11.4669 4.29667 11.4669 4.29667C11.711 4.8498 11.7348 5.47522 11.5336 6.04533C11.9798 6.52674 12.2234 7.16163 12.2136 7.818C12.2136 10.356 10.6676 10.914 9.19689 11.0773C9.35435 11.2375 9.47582 11.4294 9.55319 11.6402C9.63056 11.8511 9.66205 12.076 9.64556 12.3C9.64556 13.184 9.63756 13.896 9.63756 14.1133C9.63756 14.2887 9.75689 14.4947 10.0916 14.43C11.5794 13.9333 12.8421 12.9235 13.6536 11.5812C14.4652 10.2388 14.7727 8.65156 14.5212 7.10327C14.2697 5.55498 13.4756 4.14666 12.2809 3.13023C11.0862 2.11379 9.56881 1.55554 8.00023 1.55533Z'
                    className='fill-[#000] group-hover:fill-[#fff] dark:fill-[#fff] dark:group-hover:fill-[#000]'
                  />
                </svg>
              </span>
            </a>
            <a
              href='https://team-sync-2e072.web.app'
              target='_blank'
              rel='noopener'
              className='relative inline-block px-3 py-1 font-medium group text-sm'
            >
              <span className='absolute rounded-lg inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black dark:bg-white group-hover:-translate-x-0 group-hover:-translate-y-0'></span>
              <span className='absolute rounded-lg inset-0 w-full h-full bg-white dark:bg-black border-2 border-black dark:border-white group-hover:bg-black dark:group-hover:bg-white'></span>
              <span className='relative flex gap-2 items-center text-black dark:text-white group-hover:text-white dark:group-hover:text-black'>
                Live preview
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.0003 9.33334V12.5553C12.0004 12.6575 11.9804 12.7587 11.9413 12.8532C11.9022 12.9476 11.8449 13.0334 11.7727 13.1057C11.7004 13.1779 11.6146 13.2352 11.5202 13.2743C11.4257 13.3134 11.3245 13.3334 11.2223 13.3333H3.44499C3.3428 13.3334 3.24159 13.3134 3.14716 13.2743C3.05273 13.2352 2.96693 13.1779 2.89467 13.1057C2.82241 13.0334 2.7651 12.9476 2.72604 12.8532C2.68697 12.7587 2.6669 12.6575 2.66699 12.5553V4.77801C2.6669 4.67581 2.68697 4.5746 2.72604 4.48017C2.7651 4.38574 2.82241 4.29994 2.89467 4.22768C2.96693 4.15542 3.05273 4.09812 3.14716 4.05905C3.24159 4.01998 3.3428 3.99992 3.44499 4.00001H6.52366M9.48833 2.66667H13.3337V6.512M8.07433 7.92601L13.2597 2.74067'
                    className='stroke-[#000] group-hover:stroke-[#fff] dark:stroke-[#fff] dark:group-hover:stroke-[#000]'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
