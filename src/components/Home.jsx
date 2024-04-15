import React, { useState, useEffect } from 'react';
import {FaStar} from 'react-icons/fa'

const Home = () => {
  const [buttonText, setButtonText] = useState("npm create refine-app@latest");
  const [text, setText] = useState("Next.js");
  const [text2, setText2] = useState("Material UI");
  const [text3, setText3] = useState("Nest.js");
  const [text4, setText4] = useState("Google");
  const [image,setImage] = useState("");  
  const [image2,setImage2] = useState("");  
  const [image3,setImage3] = useState("");  
  const [image4,setImage4] = useState("");  
 
  useEffect(() => {
    const interval = setInterval(() => {
      setText("Vite.js");
  
      setTimeout(() => {
        setText("Next.js");
      }, 2000);
    }, 4000); 
  
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setText2("Ant Design");
  
      setTimeout(() => {
        setText2("Material UI");
      }, 4000);
    }, 6500); 
  
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setText3("Appwrite");
  
      setTimeout(() => {
        setText3("Nest.js");
      }, 2500);
    }, 5000); 
  
    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
    const interval = setInterval(() => {
      setText4("Auth0");
  
      setTimeout(() => {
        setText4("Google");
      }, 4500);
    }, 6500); 
  
    return () => clearInterval(interval);
  }, []);



  useEffect(() => {
    if (text === "Next.js") {
      setImage("src/assets/next-logo.png");
    } else if (text === "Vite.js") {
      setImage("src/assets/vite.png");
    }
    
  }, [text]);

  useEffect(() => {
    if (text2 === "Material UI") {
      setImage2("src/assets/material-logo.png");
    } else if (text2 === "Ant Design") {
      setImage2("src/assets/antdesign.png");
    }
  }, [text2]);

  useEffect(() => {
    if (text3 === "Nest.js") {
      setImage3("src/assets/nest-logo.png");
    } else if (text3 === "Appwrite") {
      setImage3("src/assets/appwrite.png");
    }
  }, [text3]);

  useEffect(() => {
    if (text4 === "Google") {
      setImage4("src/assets/google-logo.png");
    } else if (text4 === "Auth0") {
      setImage4("src/assets/auth0.png");
    }
  }, [text4]);

  const handleButtonClick = () => {
    navigator.clipboard.writeText("npm create refine-app@latest");
    setButtonText("Copied to Clipboard");
    setTimeout(() => {
      setButtonText("npm create refine-app@latest");
    }, 2000);
  };
  


  return (
    <div className='overflow-hidden md:mx-auto mx-5 flex md:mt-0 mt-10 max-w-[1100px] py-[20px] relative '>
      <div className='z-10  flex flex-col items-start   md:pt-36 pt-7 md:gap-16 gap-7 mx-auto '>
        <div className='flex justify-center text-center items-center gap-1 border border-gray-400 p-1 rounded-xl border-shadow-2xl shadow-[#f93] '>
          <a className='text-[#f93] drop-shadow-lg  shadow-[#f93]'><FaStar /></a>
          <p className='font-light text-[12px] text-white'>22.8K</p>
          <span className='text-[12px] text-gray-500 font-light'>Github stars so far</span>
        </div>
        <div className='flex md:w-[500px] w-[340px] flex-col gap-6'>
          <h1 className='md:text-[45px] text-[30px] font-extrabold  w-auto h-auto  '>Open-source Retool for Enterprise</h1>
          <p className='text-gray-400 tracking-tight'>Build React-based internal tools, admin panels, <br /> dashboards & B2B apps with unmatched flexibility.</p>
        </div>
        <div className='flex justify-center items-center text-center gap-5  '>
          <div className=''>
            <a href="#" className=' bg-[#4effff] md:text-[16px] text-[16px]  text-black transition-all ease-linear duration-200 flex items-center py-4  font-semibold rounded-full py-[10px] px-7'>
            <svg className='bg-[#4effff] md:block ' width="25" height="24" viewBox="0 0 25 24" fill="" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M6.63817 4.33485C7.45968 3.87698 8.46639 3.88939 9.2762 4.36769L18.4191 9.76769C19.21 10.2348 19.7 11.0807 19.7 12C19.7 12.9193 19.21 13.7652 18.4191 14.2323L9.2762 19.6323C8.46639 20.1106 7.45968 20.123 6.63817 19.6652C5.81527 19.2065 5.3 18.343 5.3 17.4V6.6C5.3 5.65703 5.81527 4.79348 6.63817 4.33485ZM8.46252 5.74534C8.14253 5.55634 7.74213 5.55128 7.4171 5.73244C7.09346 5.91282 6.9 6.24599 6.9 6.6V17.4C6.9 17.754 7.09346 18.0872 7.4171 18.2676C7.74213 18.4487 8.14253 18.4437 8.46252 18.2547L17.6054 12.8547C17.916 12.6712 18.1 12.3452 18.1 12C18.1 11.6548 17.916 11.3288 17.6054 11.1453L8.46252 5.74534Z" fill="currentColor"></path>
            </svg>Get Started
            </a>
          </div>
          <div>
            <button className='  transition-all ease-in duration-150 rounded-full md:block hidden font-semibold md:text-[12px] text-[8px] tracking-widest text-[#38afb3] bg-[#1f4149] bg-opacity-90 w-full py-3 px-7' onClick={handleButtonClick}>
              {buttonText}
            </button>
          </div>
        </div>
      </div>
      <div className='two  md:flex hidden flex-col justify-center items-center text-center  mt-20   bg-[#202038]   border-gray-400 rounded-2xl w-[690px] h-[480px]  '>
        <div className='flex flex-col px-12 pt-[30px] w-full  h-full '>
          <div className='flex justify-between gap-16 mb-24  '>
        <div className='border flex justify-center items-center gap-3 w-48  border-gray-500 bg-black bg-opacity-20 rounded-full px-6 py-3'>
          <div className='flex justify-start items-start text-center svg'>
               <img src={image} alt="" className='drop-shadow-lg shadow-white'  width={25} height={57}   />
          </div>
          <div className=' flex flex-col items-start justify-center text-start'>
             <span className='text-[10px] uppercase text-gray-400 font-extrabold tracking-wider leading-3'>React Platform</span> 
            <span className='text-[11px] font-light text-gray-300 text-opacity-80'>{text}</span>
          </div>
          </div>
          <div className='border flex justify-center items-center gap-3 w-48  border-gray-500 bg-black bg-opacity-20 rounded-full px-6  py-3'>
          <div className=' flex flex-col items-end justify-end text-start'>
             <span className='text-[10px] uppercase text-gray-400 font-extrabold tracking-wider leading-3'>UI framework</span> 
             <span className='text-[11px] font-light text-gray-300 text-opacity-80'>{text2}</span>
            
          </div>
          <div className='flex justify-start items-start text-center  '>
               <img src={image2} alt=""  width={25} height={57}   />
          </div>
          </div>
        </div >
        <div className='flex justify-center items-center text-center'>
          <img src="src\assets\center-logo.png" width={100} height={100} alt="" />
        </div>
        <div className='flex justify-between mt-24 gap-16 '>
        <div className='border flex justify-start items-start gap-3 w-48  border-gray-500 bg-black bg-opacity-20 rounded-full px-6 py-3'>
          <div className='flex justify-start items-start text-center  '>
               <img src={image3} alt=""  width={25} height={57}   />
          </div>
          <div className=' flex flex-col items-start justify-center text-start'>
             <span className='text-[10px] uppercase text-gray-400 font-extrabold tracking-wider leading-3'>backend</span> 
            <span className='text-[11px] font-light text-gray-300 text-opacity-80'>{text3}</span>
          </div>
          </div>
          <div className='border flex justify-center items-center gap-3 w-48  border-gray-500 bg-black bg-opacity-20 rounded-full px-6 py-3'>
          <div className=' flex flex-col items-end justify-end text-start'>
             <span className='text-[10px] uppercase text-gray-400 font-extrabold tracking-wider leading-3'>authentıcatıon</span> 
            <span className='text-[11px] font-light text-gray-300 text-opacity-80'>{text4}</span>
          </div>
                    <div className='flex justify-start items-start text-center  '>
               <img src={image4} alt=""  width={25} height={57}   />
          </div>

          </div>
        </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Home;
