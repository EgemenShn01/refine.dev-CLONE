import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MegaMenu } from 'primereact/megamenu';
        

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header   style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000}} className='filter'>
      <div className='menu flex items-center justify-between mx-auto max-w-[1200px] py-[20px] px-[32px] '>
        <div className=''>
          <a href='#' className='flex gap-2 text-white logo'>
            <img src="src\assets\Logo.png" width={24} height={57} alt="" />
            <span className='logo'>Refine</span>
          </a>
        </div>
        <div className='inline-flex gap-5 dugme '>
          <button className='inline-flex items-center text-sm leading-6 font-normal hover:opacity-25 transition-all ease-linear'>
            <span className="text-gray-900 dark:text-gray-300 transition-colors duration-150 ease-in-out inline-block">Open-source</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition duration-150 ease-out -mr-2 text-gray-500 dark:text-gray-400"><path fill="currentColor" fillRule="evenodd" d="M15.707 9.793a1 1 0 0 0-1.414 0L12 12.086 9.707 9.793a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414Z" clipRule="evenodd"></path>
            </svg>
          </button>
          <button className='inline-flex items-center text-sm leading-6 font-normal hover:opacity-25 transition-all ease-linear'>
            <span className="text-gray-900 dark:text-gray-300 transition-colors duration-150 ease-in-out inline-block">Enterprise</span>
          </button>
          <button className='inline-flex items-center text-sm leading-6 font-normal hover:opacity-25 transition-all ease-linear'>
            <span className="text-gray-900 dark:text-gray-300 transition-colors duration-150 ease-in-out inline-block">Community</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition duration-150 ease-out -mr-2 text-gray-500 dark:text-gray-400"><path fill="currentColor" fillRule="evenodd" d="M15.707 9.793a1 1 0 0 0-1.414 0L12 12.086 9.707 9.793a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414Z" clipRule="evenodd"></path>
            </svg>
          </button>
          <button className='inline-flex items-center text-sm leading-6 font-normal hover:opacity-25 transition-all ease-linear'>
            <span className="text-gray-900 dark:text-gray-300 transition-colors duration-150 ease-in-out inline-block">Company</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="transition duration-150 ease-out -mr-2 text-gray-500 dark:text-gray-400"><path fill="currentColor" fillRule="evenodd" d="M15.707 9.793a1 1 0 0 0-1.414 0L12 12.086 9.707 9.793a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l3-3a1 1 0 0 0 0-1.414Z" clipRule="evenodd"></path>
            </svg>
          </button>
        </div>
        <div className='button text-center flex items-center justify-center'>
          {isOpen ? (
            <button className='close text-white text-[25px]' onClick={toggleMenu}>
              <IoMdClose />
            </button>
          ) : (
            <button className='text-white open text-[25px]' onClick={toggleMenu}>
              <GiHamburgerMenu />
            </button>
          )}
        </div>
      </div>

      <div className={`small-menu mt-4 ${isOpen ? 'open' : ''}`}>
  <div className='flex flex-col justify-center items-center leading-10 mx-6'>
    <button className='border border-gray-400 border-solid rounded-t-[12px] p-5 w-full flex justify-between items-center text-sm leading-6 font-bold text-[1rem]'>
      <span className="text-gray-900 dark:text-gray-300 transition-colors duration-150 ease-in-out inline-block">Open-source</span>
      <svg className='border border-gray-400 border-solid rounded-full' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.79289 8.29289C9.40237 8.68342 9.40237 9.31658 9.79289 9.70711L12.0858 12L9.79289 14.2929C9.40237 14.6834 9.40237 15.3166 9.79289 15.7071C10.1834 16.0976 10.8166 16.0976 11.2071 15.7071L14.2071 12.7071C14.5976 12.3166 14.5976 11.6834 14.2071 11.2929L11.2071 8.29289C10.8166 7.90237 10.1834 7.90237 9.79289 8.29289Z" fill="currentColor"></path>
      </svg>
    </button>
    <button className='border border-gray-400 border-solid p-5 w-full flex justify-between items-center text-sm leading-6 font-bold text-[1rem]'>
      <span className="text-gray-900 dark:text-gray-300 transition-colors duration-150 ease-in-out inline-block">Enterprise</span>
    </button>
    <button className='border border-gray-400 border-solid p-5 w-full flex justify-between items-center text-sm leading-6 font-bold text-[1rem]'>
      <span className="text-gray-900 dark:text-gray-300 transition-colors duration-150 ease-in-out inline-block">Community</span>
      <svg className='border border-gray-400 border-solid rounded-full' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.79289 8.29289C9.40237 8.68342 9.40237 9.31658 9.79289 9.70711L12.0858 12L9.79289 14.2929C9.40237 14.6834 9.40237 15.3166 9.79289 15.7071C10.1834 16.0976 10.8166 16.0976 11.2071 15.7071L14.2071 12.7071C14.5976 12.3166 14.5976 11.6834 14.2071 11.2929L11.2071 8.29289C10.8166 7.90237 10.1834 7.90237 9.79289 8.29289Z" fill="currentColor"></path>
      </svg>
    </button>
    <button className='border rounded-b-[12px] border-gray-400 border-solid p-5 w-full flex justify-between items-center text-sm leading-6 font-bold text-[1rem]'>
      <span className="text-gray-900 dark:text-gray-300 transition-colors duration-150 ease-in-out inline-block">Company</span>
      <svg className='border border-gray-400 border-solid rounded-full' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.79289 8.29289C9.40237 8.68342 9.40237 9.31658 9.79289 9.70711L12.0858 12L9.79289 14.2929C9.40237 14.6834 9.40237 15.3166 9.79289 15.7071C10.1834 16.0976 10.8166 16.0976 11.2071 15.7071L14.2071 12.7071C14.5976 12.3166 14.5976 11.6834 14.2071 11.2929L11.2071 8.29289C10.8166 7.90237 10.1834 7.90237 9.79289 8.29289Z" fill="currentColor"></path>
      </svg>
    </button>
  </div>
</div>

    </header>
  );
};

export default Navbar;
  