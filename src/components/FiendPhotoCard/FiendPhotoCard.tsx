
import { photoCardProps } from '../../types/photoCardInterface';

const FiendPhotoCard = (photoCardProps:photoCardProps) => {

  const { pic, isActive} = photoCardProps;
  // w-[8.75rem] h-[8.75rem] rounded-full center-spotlight 
  if (isActive){
    return (
      <div className="w-[8.75rem] h-[8.75rem] rounded-full m-0 flex items-center justify-center">
        <div className="w-[8.75rem] h-[8.75rem] absolute content center-spotlight rounded-full "></div>
        <img className="w-[6.25rem] h-[6.25rem] m-0 absolute z-10" src={pic} alt="picture of the developers" ></img>
      </div>
    )}

  return (
    
    <div className="w-[5.687rem] h-[5.687rem] m-0 flex items-center justify-center  rounded-full" >
      
      <div className="slider-spotlight rounded-full w-[5.687rem] h-[5.687rem] absolute content"></div>

      <img className="w-[4.375rem] h-[4.375rem] m-0 absolute z-10" src={pic} alt="picture of the developers"></img>
      
    </div>
  );
};

export default FiendPhotoCard;