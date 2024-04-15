import React from 'react'

const Comments = () => {
  return (
    <div className='relative block mx-7 my-4   '>
          <div className='title md:mx-auto  max-w-[1100px]  flex flex-col justify-between  md:pt-36 pt-7 md:pb-16 pb-8'>
            <h2 className='md:text-[32px] text-[26px]'>The<span className='font-semibold drop-shadow-xl
             shadow-[#47EBEB] text-[#47EBEB]'> difference </span> that Refine makes</h2>
        </div>
        <div className='cards max-w-[1400px] md:mx-auto  md:flex   justify-center md:gap-7 '>
          <div className='card1 md:w-[375px] w-[300]   py-10 px-8  md:mb-0 mb-4   flex flex-col border border-solid border-[#2a2a4b] md:h-[248px]  
                  rounded-3xl   '>
                    <div className=''>
                  <p className='text-[15px]'>I find CRUD boring, but Refine makes it fun for developers again!</p>
                    </div>
                    <a href="">
                       <div className='rounded-full md:top-[85px] top-3  relative  flex justify-start items-center gap-4  '>
               <img src="src/assets/comment1.png"  width={48} alt="" />
                  <div className='flex flex-col  font-light text-gray-300 opacity-90 text-[14px]'>
                    <div>Zeno Rocha</div>
                    <div>CEO - Resend</div>
                  </div>
              </div>
                    </a>  
          </div>
              <div className='card2 md:w-[375px] w-[300]   py-10 px-8  md:mb-0 mb-4  flex flex-col border border-solid border-[#2a2a4b] md:h-[248px]  
                  rounded-3xl   '>
             <div>
              <p className='text-[15px]'>Refine perfectly aligns with the philosophy of React Hook Form, and they work seamlessly together.</p>
             </div>
             <a href="">
              <div className='rounded-full md:top-16 top-4 relative  flex justify-start items-center gap-4  '>
               <img src="src/assets/comment2.png"  width={48} alt="" />
              <div className='flex flex-col  font-light text-gray-300 opacity-90 text-[14px]'>
                    <div>Beier Luo</div>
                    <div>Author of React Hook From</div>
                  </div>
             </div>
             </a>
             
          </div>
             <div className='card3 md:w-[375px] w-[300]   py-10 px-8  md:mb-0 mb-4  flex flex-col border border-solid border-[#2a2a4b] md:h-[248px]  
                  rounded-3xl   '>
             <div>
              <p className='text-[15px]'>Refine has codemod support for major version transitions, making it easy for users to integrate new versions into their existing codebases seamlessly.</p>
             </div>
             <a href="">
              <div className='rounded-full md:top-[45px] top-4 relative  flex justify-start items-center gap-4  '>
               <img src="src/assets/comment3.png"  width={48} alt="" />
              <div className='flex flex-col  font-light text-gray-300 opacity-90 text-[14px]'>
                    <div>Daniel Del Core</div>
                    <div>Sr.Software Engineer at Atlassian</div>
                  </div>
             </div>
             </a>
             
          </div>
        </div>
        <div className='md:my-5 my-1 flex justify-center items-center'>
        <a href="#" className='md:w-[180px] w-[150px]  rounded-full font-bold flex justify-center      text-center items-center gap-2  md:text-[15px] text-[13px]  text-[#8cd7da] bg-[#1f4149] bg-opacity-90
              py-2 pt-3 px-5'>Show More
                     <svg className='border flex  border-gray-400 border-solid rounded-full' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M9.79289 8.29289C9.40237 8.68342 9.40237 9.31658 9.79289 9.70711L12.0858 12L9.79289 14.2929C9.40237 14.6834 9.40237 15.3166 9.79289 15.7071C10.1834 16.0976 10.8166 16.0976 11.2071 15.7071L14.2071 12.7071C14.5976 12.3166 14.5976 11.6834 14.2071 11.2929L11.2071 8.29289C10.8166 7.90237 10.1834 7.90237 9.79289 8.29289Z" fill="currentColor"></path>
                           </svg>
                     </a>
        </div>
    </div>
  )
}

export default Comments