import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import Ben from "../../assets/fiends-pics/ben.png";
import Alejo from "../../assets/fiends-pics/alejo.png";
import Trap from "../../assets/fiends-pics/trap.png";
import FiendPhotoCard from '../FiendPhotoCard/FiendPhotoCard';
// import Matt from "../../assets/fiends-pics/matt.png";
// import NG from "../../assets/fiends-pics/ng.png";
// import Sam from "../../assets/fiends-pics/sam.png";


const FiendSpotlight = () => {

  const updateClasses = (e) => {
    const slides = document.querySelectorAll(".swiper-slide");
    slides.forEach((slide) => {
      const targetEl = slide.children[0];
      targetEl.classList.remove("center-spotlight");
      targetEl.children[0].classList.remove("center-photo");
      targetEl.classList.add("slider-spotlight");
    }
    )
    
    
    const centerSlide = slides[e.activeIndex].children[0];
    centerSlide.classList.remove("slider-spotlight")
    centerSlide.classList.add("center-spotlight");
    centerSlide.children[0].classList.add("center-photo");
    
    console.log(slides[e.activeIndex])
  }

  const fiendPics = [Alejo,Trap,Ben,Alejo,Trap,Ben] //Matt,NG,Sam
  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={20}
    loop={true}
    centeredSlides={true}
    
    onSwiper={(swiper) => console.log(swiper)}
    onActiveIndexChange={(swiper) => updateClasses(swiper)}
    onInit = {(swiper) => updateClasses(swiper)}
    className = "w-[100%] h-[11.625rem]"
    >
      {fiendPics.map((pic,index) => {
        return (<SwiperSlide key={index} className="flex items-center justify-center">
          <FiendPhotoCard pic={pic} />
        </SwiperSlide >)
      })}
      {/* <SwiperSlide className=""><img className="w-[4.375rem] h-[4.375] m-0" src={Alejo} alt="picture of the developers"></img></SwiperSlide >
      <SwiperSlide className=""><img className="w-[4.375rem] h-[4.375] m-0" src={Trap} alt="picture of the developers"></img></SwiperSlide >
      <SwiperSlide className=""><img className="w-[4.375rem] h-[4.375] m-0" src={Ben} alt="picture of the developers"></img></SwiperSlide >
      <SwiperSlide className=""><img className="w-[4.375rem] h-[4.375] m-0" src={Alejo} alt="picture of the developers"></img></SwiperSlide >
      <SwiperSlide className=""><img className="w-[4.375rem] h-[4.375] m-0" src={Trap} alt="picture of the developers"></img></SwiperSlide >
      <SwiperSlide className=""><img className="w-[4.375rem] h-[4.375] m-0" src={Ben} alt="picture of the developers"></img></SwiperSlide >
       */}
      
    </Swiper>
  );
};

export default FiendSpotlight;