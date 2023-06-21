
import { photoCardProps } from '../../types/photoCardInterface';
import Ben from "../../assets/fiends-pics/ben.png"
import Alejo from "../../assets/fiends-pics/alejo.jpg"
import Trap from "../../assets/fiends-pics/trap.jfif"
import NG from "../../assets/fiends-pics/NGKao.jpg";
import { useEffect, useState } from 'react';


const FiendPhotoCard = (photoCardProps:photoCardProps) => {

  const { pic, isActive, setActiveFiend} = photoCardProps;

  const [source, SetSource] = useState<string>("");

  const updateActiveFiend = () => {
    setActiveFiend(photoCardProps.pic)
    
  }

  useEffect(() => {
    if (pic == "Ben"){
      SetSource(Ben)
    }
    if (pic == "Alejo"){
      SetSource(Alejo)
    }
    if (pic == "Trap"){
      SetSource(Trap)
    }
    if (pic == "NG"){
      SetSource(NG)
    }
  },[pic])
 
  if (isActive){
    return (
      <div className="w-[8.75rem] h-[8.75rem] rounded-full m-0 flex items-center justify-center">
        <div className="w-[8.75rem] h-[8.75rem] absolute content center-spotlight rounded-full "></div>
        <img className="w-[6.25rem] h-[6.25rem] m-0 absolute z-10 rounded-full" src={source} alt="picture of the developers" ></img>
      </div>
    )}

  return (
    
    <div className="w-[5.687rem] h-[5.687rem] m-0 flex items-center justify-center  rounded-full hover:cursor-pointer" onClick={()=>{updateActiveFiend()} } >
      
      <div className="slider-spotlight rounded-full w-[5.687rem] h-[5.687rem] absolute content"></div>

      <img className="w-[4.375rem] h-[4.375rem] m-0 absolute z-10 rounded-full" src={source} alt="picture of the developers"></img>
      
    </div>
  );
};

export default FiendPhotoCard;