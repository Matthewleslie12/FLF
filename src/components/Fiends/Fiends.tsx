import { useEffect } from "react";
import FiendBios from "../../assets/fiend-bios/fiend-bios.json"
import useBioState from "../../hooks/bioHooks";
import BioCard from "../BioCard/BioCard";
import { BioType } from "../../types/bioInterface";
import FiendPhotoCard from "../FiendPhotoCard/FiendPhotoCard";
import FiendSpotlight from "../FiendSpotlight/FiendSpotlight";
import "./Fiends.scss"

const Fiends = () => {

  
  const { activeFiend, setActiveFiend } = useBioState();
  const { activeFiendBio, setActiveFiendBio } = useBioState();
  const { id,name, bio, hobbies, techStack, linkedIn, gitHub} = activeFiendBio;
 
  useEffect(() => {

    const fiendBio: BioType= FiendBios.bios.find((bio) => bio.id === activeFiend) || FiendBios.bios[0];
    
    setActiveFiendBio(fiendBio);
    
    
  },[activeFiend,setActiveFiendBio])



  return (
    <div className="m-lg mt-[4rem] max-w-[1280px] xl:mx-auto" id="team">
      <h1 className="text-[1.75rem] md:text-[2.5rem] font-bebas text-offWhite self-start">Meet the Fiends</h1>
      <div className="flex flex-col md:flex-row mt-[1rem] justify-center w-full">
      <div className="w-full md:w-[17rem] h-full lg:max-w-[20rem]">
        <div className="lg:hidden">
          <FiendSpotlight activeFiend={activeFiend} setActiveFiend={setActiveFiend}/>
        </div>
        <div className="revolver hidden lg:flex lg:ml-[3rem] lg:mb-[5rem]">
            
         {FiendBios.bios.map((fiend, index)=>{
          if (fiend.id === activeFiend){
            return <div key={index}className="flex"><FiendPhotoCard pic={fiend.id} isActive={true} setActiveFiend={setActiveFiend}/></div>
          }else{
            return <div key={index} className="flex "><FiendPhotoCard pic={fiend.id} isActive={false} setActiveFiend={setActiveFiend}/></div>
          }
        })}
          
        </div>
      </div>
      <div className="w-full flex justify-center md:max-w-[50rem] mt-[3rem]">
         <BioCard 
          id = {id}
          name={name}
          bio={bio}
          techStack={techStack}
          hobbies={hobbies}
          linkedIn={linkedIn}
          gitHub={gitHub}
        />

      </div>
      </div>
    </div>
  );
};

export default Fiends;