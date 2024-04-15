import React, { useState, useEffect } from 'react';

const Developers = () => {
  const [images, setImages] = useState([
    "src/assets/developers/upwork.png",
    "src/assets/developers/intel.png",
    "src/assets/developers/ıbm.png",
    "src/assets/developers/amazon.png",
    "src/assets/developers/oracle.png",
    "src/assets/developers/deloitte.png",
    "src/assets/developers/meta.png",
    "src/assets/developers/atlas.png",
    "src/assets/developers/cisco.png",
    "src/assets/developers/morgan.png",
    "src/assets/developers/salesforce1.png",
  ]);
  const [currentImages, setCurrentImages] = useState([]);
  const [opacities, setOpacities] = useState(images.map(() => 0));

  useEffect(() => {
    const interval = setInterval(() => {
      const indexes = [];
      while (indexes.length < 6) {
        const randomIndex = Math.floor(Math.random() * images.length);
        if (!indexes.includes(randomIndex)) {
          indexes.push(randomIndex);
        }
      }

      // Indekslerle resimleri ve opaklık değerlerini güncelle
      const updatedImages = indexes.map(index => images[index]);
      setCurrentImages(updatedImages);

      const updatedOpacities = images.map((_, index) => {
        return indexes.includes(index) ? 1 : 0; // Seçilen resimlerin opaklığını 1, diğerlerinin 0 yap
      });
      setOpacities(updatedOpacities);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className=' inner-shadow flex flex-col md:mx-auto mx-5 max-w-[1100px] pt-[20px] px-[32px] mb-20 bg-[#202038] rounded-[24px]'>
        <div className='md:w-[400px] w-48 md:pb-0 pb-5 flex justify-start items-start text-center'>
          <p className=" md:text-[24px] text-[12px]    dark:text-gray-400 text-gray-600">Trusted by developers from</p>
        </div>
      <div>
        <div className="md:flex overflow-hidden grid md:gap-20 gap-2 justify-center items-center md:py-5 py-1 text-center">
          {currentImages.map((image, index) => (
            <img key={index} src={image} alt="" width={100} style={{ filter: 'brightness(0) invert(1)', opacity: opacities[index], transition: 'opacity 0.5s' }} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Developers;
