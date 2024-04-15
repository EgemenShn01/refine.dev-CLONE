import React,{useState} from 'react'

const Started = () => {
  const [buttonText, setButtonText] = useState("npm create refine-app@latest");


    const handleButtonClick = () => {
        navigator.clipboard.writeText("npm create refine-app@latest");
        setButtonText("Copied to Clipboard");
        setTimeout(() => {
          setButtonText("npm create refine-app@latest");
        }, 2000);
      };
  return (
    <div className='relative block md:mx-0 mx-3 md:mb-44 mb-5'>
       <div className='title flex flex-col md:justify-between md:items-start items-center max-w-[1100px]  md:mx-auto  md:pt-36 pt-7 '>
       <h2 className='md:text-[32px] text-[26px]'>Get Started Now!</h2> 
       <p className=' opacity-60 text-[15px] mt-4 md:w-[400px] md:mx-0 mx-5 text-gray-100 font-light'>
       Choose your way to scaffold your project and start developing in seconds.              
        </p>
         </div>
         <div  className='md:flex max-w-[1300px] md:mx-auto mt-4 my-5 md:gap-5  '>
            <div className=' relative md:left-12 flex flex-col md:gap-7 gap-5 md:mb-0  mb-4   p-12 rounded-tl-3xl rounded-bl-3xl md:rounded-r-none rounded-br-3xl rounded-tr-3xl  bg-[#202038] md:w-[600px] md:h-[272px] '>
                     <p className='opacity-60 md:text-[22px] mt-6 md:w-[600px] md:mx-0 mx-5 text-gray-100 font-semibold'>
                        Use our online GUI to create, customize, and download.</p>
         <div className=''>
            <a href="#" className=' bg-[#4effff]
             md:text-[16px] text-[16px] w-[250px] text-black transition-all ease-linear duration-200 flex justify-center items-center 
               font-semibold rounded-full py-[10px] px-5'>
            <svg className='bg-[#4effff] md:block ' width="25" height="24" viewBox="0 0 25 24" fill="" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.63817 4.33485C7.45968 3.87698 8.46639 3.88939 9.2762 4.36769L18.4191 9.76769C19.21 10.2348 19.7 11.0807 19.7 12C19.7 12.9193 19.21 13.7652 18.4191 14.2323L9.2762 19.6323C8.46639 20.1106 7.45968 20.123 6.63817 19.6652C5.81527 19.2065 5.3 18.343 5.3 17.4V6.6C5.3 5.65703 5.81527 4.79348 6.63817 4.33485ZM8.46252 5.74534C8.14253 5.55634 7.74213 5.55128 7.4171 5.73244C7.09346 5.91282 6.9 6.24599 6.9 6.6V17.4C6.9 17.754 7.09346 18.0872 7.4171 18.2676C7.74213 18.4487 8.14253 18.4437 8.46252 18.2547L17.6054 12.8547C17.916 12.6712 18.1 12.3452 18.1 12C18.1 11.6548 17.916 11.3288 17.6054 11.1453L8.46252 5.74534Z" fill="currentColor"></path>
            </svg>Try it in your browser
            </a>
          </div>
            </div>
            <div className='relative md:block hidden z-50 md:right-4 h-full md:top-24 p-10 bg-[#14141f] rounded-full'>
                OR
            </div>
            <div className='relative md:right-20 flex flex-col gap-7   p-12 rounded-tl-3xl rounded-bl-3xl md:rounded-l-none rounded-br-3xl rounded-tr-3xl  bg-[#202038] md:w-[600px] md:h-[272px]  '>
            <p className='opacity-60 md:text-[22px] mt-6 md:w-[600px] md:mx-0 mx-5 text-gray-100 font-semibold'>Use our online GUI to create, customize, and download.</p>
            <div>
            <button className='rounded-full md:block  md:font-semibold font-bold md:text-[12px] text-[10px] tracking-widest text-[#38afb3] bg-[#1f4149] bg-opacity-90 md:w-[300px] py-3 px-7' onClick={handleButtonClick}>
              {buttonText}
            </button>
          </div>
            </div>
         </div>
    </div>
  )
}

export default Started