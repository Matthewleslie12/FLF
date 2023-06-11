import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';


import Ben from "../../assets/fiends-pics/ben.png";
import Alejo from "../../assets/fiends-pics/alejo.png";
import Trap from "../../assets/fiends-pics/trap.png";

const FiendSpotlight = () => {
  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={30}
    loop={true}
    centeredSlides={true}
    >
      <SwiperSlide><img className="w-[4.375rem] h-[4.375]" src={Alejo} alt="picture of the developers"></img></SwiperSlide>
      <SwiperSlide><img className="w-[4.375rem] h-[4.375]" src={Trap} alt="picture of the developers"></img></SwiperSlide>
      <SwiperSlide><img className="w-[4.375rem] h-[4.375]" src="" alt="picture of the developers"></img></SwiperSlide>
      <SwiperSlide><img className="w-[4.375rem] h-[4.375]" src="" alt="picture of the developers"></img></SwiperSlide>
      <SwiperSlide><img className="w-[4.375rem] h-[4.375]" src="" alt="picture of the developers"></img></SwiperSlide>
      <SwiperSlide><img className="w-[4.375rem] h-[4.375]" src={Ben} alt="picture of the developers"></img></SwiperSlide>
      
    </Swiper>
  );
};

export default FiendSpotlight;