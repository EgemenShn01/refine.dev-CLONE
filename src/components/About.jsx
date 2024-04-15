import React, { useState, useEffect, useRef } from 'react';
import { useSpring, animated } from 'react-spring';
import { TbTableShortcut } from "react-icons/tb";
import { LuListMinus } from "react-icons/lu";
import { FaChartSimple, FaWpforms } from "react-icons/fa6";
import { BsMagic } from "react-icons/bs";
import { SiAuth0 } from "react-icons/si";

const About = () => {
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  const buttons = [
    { imageUrl: 'src/assets/pages/tables.png', imageUrl1: 'src/assets/codeimg/tables-code.png', icon: <TbTableShortcut />, title: 'Tables' },
    { imageUrl: 'src/assets/pages/list.png', imageUrl1: 'src/assets/codeimg/list-code.png', icon: <LuListMinus />, title: 'List' },
    { imageUrl: 'src/assets/pages/charts.png', imageUrl1: 'src/assets/codeimg/charts-code.png', icon: <FaChartSimple />, title: 'Charts' },
    { imageUrl: 'src/assets/pages/forms.png', imageUrl1: 'src/assets/codeimg/forms-code.png', icon: <FaWpforms />, title: 'Forms' },
    { imageUrl: 'src/assets/pages/wizards.png', imageUrl1: 'src/assets/codeimg/wizards-code.png', icon: <BsMagic />, title: 'Wizards' },
    { imageUrl: 'src/assets/pages/authen.png', imageUrl1: 'src/assets/codeimg/authen-code.png', icon: <SiAuth0 />, title: 'Auth' }
  ];

  const springProps = useSpring({
    opacity: 1,
    x: 0,
    from: { opacity: 0, x: 100 },
    config: { duration: 500 }
  });

  const springPropsSecondImage = useSpring({
    opacity: 1,
    y: 0,
    from: { opacity: 0, y:100 },
    config: { duration: 500 }
  });
  

  const handleButtonClick = (index) => {
    setImage(buttons[index].imageUrl);
    setImage1(buttons[index].imageUrl1);
    setActiveButtonIndex(index);
    startAnimation(); // Butona tıklandığında animasyonu başlat
  };

  const intervalRef = useRef(null);

  useEffect(() => {
    const startInterval = () => {
      intervalRef.current = setInterval(() => {
        setActiveButtonIndex(prevIndex => (prevIndex + 1) % buttons.length);
        startAnimation(); // Butona tıklanmadan otomatik geçişte animasyonu başlat
      }, 5000);
    };

    const stopInterval = () => {
      clearInterval(intervalRef.current);
    };

    startInterval();

    return () => {
      stopInterval();
    };
  }, [buttons.length]);

  useEffect(() => {
    const currentIndex = activeButtonIndex % buttons.length;
    setImage(buttons[currentIndex].imageUrl);
    setImage1(buttons[currentIndex].imageUrl1);
  }, [activeButtonIndex, buttons]);

  const startAnimation = () => {
    springProps.opacity.set(0);
    springProps.x.set(100);
    springPropsSecondImage.opacity.set(0);
    springPropsSecondImage.y.set(100);
  };

  return (
    <div className='relative block '>
      <div className='flex mx-auto  max-w-[1100px]  flex-col justify-between  py-[30px]'>
        <div className='md:text-[28px] text-[20px] md:mx-0 mx-5 '>
          <span>The <span className='font-semibold drop-shadow-xl shadow-[#47EBEB] text-[#47EBEB]'>spot sweet</span> between low-code and full-code.</span>
        </div>
        <div>
          <p className='opacity-80 text-[15px] mt-6 md:w-[400px] md:mx-0 mx-5 text-gray-100 font-light'>Drag-and-drop tools shine initially but collapse under the  weight of complexity. Refine offers comparable speed at  the start and infinite scaling in the long run.</p>
        </div>
      </div>
      <div className='md:flex  mx-5  max-w-[1200px]   block inner-shadow-right  inner-shadow-top justify-center md:mx-auto  md:rounded-[25px] rounded-xl md:px-5  md:pb-10 pb-24 md:pt-28 pt-12 bg-[#212133] inner-shadow'>
        <div className='flex flex-col justify-start md:ml-5  ml-1 md:gap-10 gap-5 md:px-0 px-10  py-7'>
          <div className=' flex flex-col md:gap-5 gap-2'>
            <h5 className=' opacity-80 md:text-[18px] text-[14px] font-semibold md:w-[400px] w-[250px]'>Business applications not only share 
              fundemental Ul elements, but also the 
              underlying logic.</h5>
            <p className='opacity-70 md:text-[14px] text-[13px] font-light md:w-[400px] w-[250px]'>Stop writing repetitive code for CRUD, security and 
              state management. Let Refine automatically transform
              your Ul elements to enterprise-grade:</p>
          </div>
          <div className='grid grid-cols-2 gap-5 max-w-[300px]'>  
            {buttons.map((button, index) => (
              <button
                key={index}
                className={`text-[#6c7793] focus:bg-[#14141f] focus:text-white px-3 py-1 rounded-full bg-[#202038] text-[16px] font-semibold flex justify-start items-center gap-2 ${
                  activeButtonIndex === index ? 'opacity-100 text-white' : 'opacity-60 text-[#6c7793]'
                }`}
                onClick={() => handleButtonClick(index)}
              >
                {button.icon}
                {button.title}
              </button>
            ))}
          </div>
        </div>
        <div className="opacity-75  md:px-auto px-6 md:w-[580px] w-[393px]  md:h-[464px] h-[368px]  ">
          <animated.img
            src={image}
            alt=""
            className='md:w-full w-full pl-0 opacity md:h-[400px] h-[400px] drop-shadow-xl shadow-black'
            style={{ ...springProps }}
          />
          <animated.img
            src={image1}
            alt=""
            className='relative bottom-10 right-8 bg-[#14141f] md:w-[488px] w-[228px] h-[86px] md:h-[122px] rounded-2xl shadow-lg shadow-black'
            style={{ ...springPropsSecondImage }}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
