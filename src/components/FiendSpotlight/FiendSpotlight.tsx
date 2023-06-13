import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Ben from "../../assets/fiends-pics/ben.png";
import Alejo from "../../assets/fiends-pics/alejo.png";
import Trap from "../../assets/fiends-pics/trap.png";
import FiendPhotoCard from '../FiendPhotoCard/FiendPhotoCard';
import { useEffect, useState } from 'react';
// import Matt from "../../assets/fiends-pics/matt.png";
// import NG from "../../assets/fiends-pics/ng.png";
// import Sam from "../../assets/fiends-pics/sam.png";
import FiendBios from "../../assets/fiend-bios/fiend-bios.json";
import { SpotlightProps } from '../../types/SpotlightProps';


const FiendSpotlight = (SpotlightProps: SpotlightProps) => {

  const { activeFiend, setActiveFiend } = SpotlightProps
  const fiendRoster = FiendBios.bios.map((bio:{id:string}) => bio.id);
  
  
  const [slideActiveIndex, setSlideActiveIndex] = useState<number>(0);// add to img tag;
  
  useEffect (() => {
    const activeId = FiendBios.bios[slideActiveIndex].id;
    
    setActiveFiend(activeId);
  }
  ,[slideActiveIndex,setActiveFiend])


  const updateClasses = (e:{realIndex:number}) => {
    setSlideActiveIndex(e.realIndex)
  }
  
  const fiendPics = [Alejo,Trap,Ben] //Matt,NG,Sam
  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={20}
    loop={true}
    centeredSlides={true}
    initialSlide={fiendRoster.indexOf(activeFiend)}
    onSwiper={(swiper) => console.log(swiper)}
    onActiveIndexChange={(swiper) => updateClasses(swiper)}
    onInit = {(swiper) => updateClasses(swiper)}
    className = "max-w-[32.1875rem] h-[13.625rem] md:w-full md:h-[32.8125rem] hover:cursor-pointer "

    breakpoints={{
      
      768: {
        direction:"vertical",
      }
      }}>
      {fiendPics.map((pic,index) => {
      if (slideActiveIndex === index){
        return (<SwiperSlide key={index} className="flex items-center justify-center relative bottom-[2rem] md:bottom-0" >
          
          <FiendPhotoCard pic={pic} isActive={true}/>
        </SwiperSlide >)

      }else{
      return (<SwiperSlide key={index} className="flex items-center justify-center relative top-[1rem]" >
          <FiendPhotoCard pic={pic} isActive={false}/>
        </SwiperSlide >)}
})}
      
    </Swiper>
  );
};

export default FiendSpotlight;