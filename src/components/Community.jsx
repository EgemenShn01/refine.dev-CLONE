import React from 'react'

const Community = () => {
  return (
    <div className='relative block mx-7 my-4   '>
        <div className='title md:mx-auto max-w-[1100px]  flex flex-col justify-between  md:pt-36 pt-7 md:pb-16 pb-8'>
            <h2 className='md:text-[32px] text-[26px]'>Feel the power of a <span className='font-semibold drop-shadow-xl
             shadow-[#47EBEB] text-[#47EBEB]'>great community.</span></h2>
        </div>
        <div className='max-w-[1400px] mx-auto md:flex   justify-center  md:gap-10 '>
            <div className='card4 flex flex-col md:gap-7 gap-'>
                <div className='md:flex   gap-10 '>
                <div className='md:w-[330px] w-[200]  pl-8 md:mb-0 mb-4  flex flex-col bg-[#202038]  md:h-[182px]  
                  rounded-3xl  gap-5 inner-shadow1'>
                    <div className='font-bold tracking-wider bg-gradient-to-t to-white  from-gray-600 
                     inline-block text-transparent bg-clip-text  pt-1 whitespace-nowrap text-[64px]'>23K</div> 
                    <span className=' pb-5 text-white text-opacity-50 text-[16px]'>Stars on Github</span>
                 </div>
                 <div className='md:w-[330px] w-[200]  pl-8  md:mb-0 mb-4  flex flex-col bg-[#202038]  md:h-[182px]  
                  rounded-3xl  gap-5 inner-shadow1'>
                      <div className='font-bold tracking-wider bg-gradient-to-t to-white  from-gray-600 
                     inline-block text-transparent bg-clip-text  pt-1 whitespace-nowrap text-[64px]'>8K+</div> 
                    <span className=' pb-5 text-white text-opacity-50 text-[16px]'>Projects on production, including large enterprises</span>
                 </div>
                </div>
                <div className='md:flex gap-10'>
                <div className='md:w-[330px] w-[200]  pl-8 md:mb-0 mb-4  flex flex-col bg-[#202038]  md:h-[182px]  
                  rounded-3xl  gap-5 inner-shadow1'>
                      <div className='font-bold tracking-wider bg-gradient-to-t to-white  from-gray-600 
                     inline-block text-transparent bg-clip-text  pt-1 whitespace-nowrap text-[64px]'>32K+</div> 
                    <span className=' pb-5 text-white text-opacity-50 text-[16px]'>Active developers in our open-source community</span>
                 </div>
                 <div className='md:w-[330px] w-[200]  pl-8  md:mb-0 mb-4  flex flex-col bg-[#202038]  md:h-[182px]  
                  rounded-3xl  gap-5 inner-shadow1'>
                      <div className='font-bold tracking-wider bg-gradient-to-t to-white  from-gray-600 
                     inline-block text-transparent bg-clip-text  pt-1 whitespace-nowrap text-[64px]'>200K+</div> 
                    <span className=' pb-5 text-white text-opacity-50 text-[16px]'>End users are using apps built with Refine   </span>
                 </div>
                </div>
                </div>
                <div className='card2   '>
                <div className='md:w-[484px] w-[200] flex flex-col  bg-[#202038]  md:h-[390px]  
                 rounded-3xl gap-5 inner-shadow1'>
                    <div className='flex p-4'>
                    <img src="src/assets/community.png"  alt="" />
                    </div>
                    <div className='text-gray-400 px-6 md:pb-0 pb-4 '>
                    Backed by <span className='font-semibold text-white '>Y Combinator </span>
                    <br />
                    and <span className='font-semibold  text-white'>500 Emerging Europe.</span> 
                    </div>
                 </div>
                </div>
        </div>
    </div>
  )
}

export default Community