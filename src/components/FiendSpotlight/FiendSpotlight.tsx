import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Ben from "../../assets/fiends-pics/ben.png";
import Alejo from "../../assets/fiends-pics/alejo.png";
import Trap from "../../assets/fiends-pics/trap.png";
import FiendPhotoCard from '../FiendPhotoCard/FiendPhotoCard';
import { useState } from 'react';
// import Matt from "../../assets/fiends-pics/matt.png";
// import NG from "../../assets/fiends-pics/ng.png";
// import Sam from "../../assets/fiends-pics/sam.png";


const FiendSpotlight = () => {

  
  const [slideActiveIndex, setSlideActiveIndex] = useState();// add to img tag;
  

  const updateClasses = (e) => {
    setSlideActiveIndex(e.realIndex)
  }
  
  const fiendPics = [Alejo,Trap,Ben] //Matt,NG,Sam
  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={20}
    loop={true}
    centeredSlides={true}
    
    onSwiper={(swiper) => console.log(swiper)}
    onActiveIndexChange={(swiper) => updateClasses(swiper)}
    onInit = {(swiper) => updateClasses(swiper)}
    className = "w-[100%] h-[13.625rem]"
    >
      {fiendPics.map((pic,index) => {
      if (slideActiveIndex === index){
        return (<SwiperSlide key={index} className="flex items-center justify-center relative bottom-[2rem]" >
          
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