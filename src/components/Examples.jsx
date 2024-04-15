import React, { useState } from 'react';
import { TabView, TabPanel } from 'primereact/tabview';

const Examples = () => {
  const [hoveredTab, setHoveredTab] = useState(null);

  return (
    <div className='sm:flex  hidden   flex-col items-center justify-between sm:mx-auto mx-5 max-w-[1200px] py-10'>
      <div className='flex flex-col text-center justify-center items-center sm:h-[786px]  h-[400px] bg-[#202038] sm:mx-auto mx-5 max-w-[1200px] py-[20px] relative border-gray-400 rounded-[30px]'>
        <TabView className='flex flex-col items-center sm:gap-8 gap-1'>
          <TabPanel
            header="CRM Application"
            className='px-4 hover:text-gray-400 py-[14px] bg-[#202038]  transition-all ease-in duration-150  rounded-full mb-2'
            onMouseEnter={() => setHoveredTab("CRM")}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <img src="src/assets/CRM.png" alt="" width={1000} className='hover:backdrop-blur-sm hover:bg-white/30 transition-all ease-in duration-150' />
            {hoveredTab === "CRM" && (
              <button className='absolute  bottom-0 gap-2 flex transition-all left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4effff] hover:scale-110 rounded-full py-[7px] px-5 text-black'>See Live Demo 
               <svg className='border border-gray-400 border-solid rounded-full' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.79289 8.29289C9.40237 8.68342 9.40237 9.31658 9.79289 9.70711L12.0858 12L9.79289 14.2929C9.40237 14.6834 9.40237 15.3166 9.79289 15.7071C10.1834 16.0976 10.8166 16.0976 11.2071 15.7071L14.2071 12.7071C14.5976 12.3166 14.5976 11.6834 14.2071 11.2929L11.2071 8.29289C10.8166 7.90237 10.1834 7.90237 9.79289 8.29289Z" fill="currentColor"></path>
      </svg></button>
            )}
          </TabPanel>
          <TabPanel 
            header="E-Commerce Application"
            className='px-4 hover:text-gray-400  py-[14px] bg-[#202038] transition-all ease-in duration-150 border-gray-400 rounded-full mb-2'
            onMouseEnter={() => setHoveredTab("E-Ticaret")}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <img src="src/assets/e-commerce.png" alt="" width={1000} className='hover:backdrop-blur-sm hover:bg-white/30 transition-all ease-in duration-150' />
            {hoveredTab === "E-Ticaret" && (
              <button className='absolute  bottom-0 gap-2 flex transition-all left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4effff] hover:scale-110 rounded-full py-[7px] px-5 text-black'>See Live Demo
               <svg className='border border-gray-400 border-solid rounded-full' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.79289 8.29289C9.40237 8.68342 9.40237 9.31658 9.79289 9.70711L12.0858 12L9.79289 14.2929C9.40237 14.6834 9.40237 15.3166 9.79289 15.7071C10.1834 16.0976 10.8166 16.0976 11.2071 15.7071L14.2071 12.7071C14.5976 12.3166 14.5976 11.6834 14.2071 11.2929L11.2071 8.29289C10.8166 7.90237 10.1834 7.90237 9.79289 8.29289Z" fill="currentColor"></path>
      </svg></button>
            )}
          </TabPanel>
          <TabPanel
            header="HR Application"
            className='px-4 hover:text-gray-400  py-[14px] bg-[#202038] transition-all ease-in duration-150 border-gray-400 rounded-full mb-2'
            onMouseEnter={() => setHoveredTab("İK")}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <img src="src/assets/HR.png" alt="" width={1000} className='hover:backdrop-blur-sm hover:bg-white/30 transition-all ease-in duration-150' />
            {hoveredTab === "İK" && (
              <button className='absolute  bottom-0 gap-2 flex transition-all left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4effff] hover:scale-110 rounded-full py-[7px] px-5 text-black'>See Live Demo
               <svg className='border border-gray-400 border-solid rounded-full' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.79289 8.29289C9.40237 8.68342 9.40237 9.31658 9.79289 9.70711L12.0858 12L9.79289 14.2929C9.40237 14.6834 9.40237 15.3166 9.79289 15.7071C10.1834 16.0976 10.8166 16.0976 11.2071 15.7071L14.2071 12.7071C14.5976 12.3166 14.5976 11.6834 14.2071 11.2929L11.2071 8.29289C10.8166 7.90237 10.1834 7.90237 9.79289 8.29289Z" fill="currentColor"></path>
      </svg></button>
            )}
          </TabPanel>
          <TabPanel
            header="DevOps Dashboard"
            className='px-4 hover:text-gray-400  py-[14px] bg-[#202038] transition-all ease-in duration-150 border-gray-400 rounded-full mb-2'
            onMouseEnter={() => setHoveredTab("DevOps")}
            onMouseLeave={() => setHoveredTab(null)}
          >
            <img src="src/assets/Devops.png" alt="" width={1000} className='hover:backdrop-blur-sm hover:bg-white/30 transition-all ease-in duration-150' />
            {hoveredTab === "DevOps" && (
              <button className='absolute  bottom-0 gap-2 flex transition-all left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#4effff] hover:scale-110 rounded-full py-[7px] px-5 text-black'>See Live Demo
               <svg className='border border-gray-400 border-solid rounded-full' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.79289 8.29289C9.40237 8.68342 9.40237 9.31658 9.79289 9.70711L12.0858 12L9.79289 14.2929C9.40237 14.6834 9.40237 15.3166 9.79289 15.7071C10.1834 16.0976 10.8166 16.0976 11.2071 15.7071L14.2071 12.7071C14.5976 12.3166 14.5976 11.6834 14.2071 11.2929L11.2071 8.29289C10.8166 7.90237 10.1834 7.90237 9.79289 8.29289Z" fill="currentColor"></path>
      </svg></button>
            )}
          </TabPanel>
        </TabView>
      </div>
    </div>
  );
};

export default Examples;
