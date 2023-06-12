import React from 'react';

const FiendPhotoCard = ({pic}) => {
  
  return (
    <div className="w-[4.375rem] h-[4.375] m-0 flex items-center justify-center slider-spotlight">

      <img className="w-[4.375rem] h-[4.375] m-0" src={pic} alt="picture of the developers"></img>
      
    </div>
  );
};

export default FiendPhotoCard;