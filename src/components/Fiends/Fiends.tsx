import { useEffect } from "react";
import FiendBios from "../../assets/fiend-bios/fiend-bios.json"
import useBioState from "../../hooks/bioHooks";
import BioCard from "../BioCard/BioCard";
import { BioType } from "../../types/bioInterface";
import FiendPhotoCard from "../FiendPhotoCard/FiendPhotoCard";
import FiendSpotlight from "../FiendSpotlight/FiendSpotlight";


const Fiends = () => {

  
  const { activeFiend, setActiveFiend } = useBioState();
  const { activeFiendBio, setActiveFiendBio } = useBioState();
  const { id,name, bio, hobbies, techStack, linkedIn, gitHub} = activeFiendBio;
 
  useEffect(() => {

    const fiendBio: BioType= FiendBios.bios.find((bio) => bio.id === activeFiend) || FiendBios.bios[0];
    
    setActiveFiendBio(fiendBio);
    
    
  },[activeFiend,setActiveFiendBio])



  return (
    <div className="m-lg ">
      <h1 className="text-[1.75rem] md:text-[2.5rem] font-bebas text-offWhite self-start">Meet the Fiends</h1>
      <div className="flex flex-col md:flex-row mt-[1rem] justify-center w-full">
      <div className="w-full md:w-[17rem] h-full lg:max-w-[20rem]">
        <div className="lg:hidden">
          <FiendSpotlight activeFiend={activeFiend} setActiveFiend={setActiveFiend}/>
        </div>
        <div className="hidden h-[32.8125rem] lg:flex flex-col  max-w-[17rem] mb-[1rem]">
            
         {FiendBios.bios.map((fiend)=>{
          if (fiend.id === activeFiend){
            return <div className="flex first:self-end even:self-center even:mr-[1rem] even:mb-[1rem]  last:self-end"><FiendPhotoCard pic={fiend.id} isActive={true} setActiveFiend={setActiveFiend}/></div>
          }else{
            return <div className="flex first:self-end even:self-center even:mr-[3rem] even:mb-[1rem]  last:self-end"><FiendPhotoCard pic={fiend.id} isActive={false} setActiveFiend={setActiveFiend}/></div>
          }
        })}
          
        </div>
      </div>
      <div className="w-full flex justify-center md:max-w-[50rem]">
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