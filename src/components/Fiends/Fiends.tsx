import { useEffect } from "react";
import FiendBios from "../../assets/fiend-bios/fiend-bios.json"
import useBioState from "../../hooks/bioHooks";
import BioCard from "../BioCard/BioCard";
import { BioType } from "../../types/bioInterface";
import FiendSpotlight from "../FiendSpotlight/FiendSpotlight";
const Fiends = () => {

  
  const { activeFiend, setActiveFiend } = useBioState();
  const { activeFiendBio, setActiveFiendBio } = useBioState();

  
  useEffect(() => {

    
    const fiendBio: BioType= FiendBios.bios.find((bio) => bio.id === activeFiend) || FiendBios.bios[0];
    
    setActiveFiendBio(fiendBio);
    
    
  },[activeFiend,setActiveFiendBio])



  return (
    <div className="m-lg ">
      <h1 className="text-[1.75rem] md:text-[2.5rem] font-bebas text-offWhite self-start">Meet the Fiends</h1>
      <div className="flex flex-col md:flex-row mt-[1rem] ">
      <div className="w-full md:w-[17rem]">
        <FiendSpotlight activeFiend={activeFiend} setActiveFiend={setActiveFiend}/>
      </div>
      <div className="w-full flex justify-center">
         <BioCard 
          id = {activeFiendBio.id}
          name={activeFiendBio.name}
          bio={activeFiendBio.bio}
          techStack={activeFiendBio.techStack}
          hobbies={activeFiendBio.hobbies}
          linkedIn={activeFiendBio.linkedIn}
          gitHub={activeFiendBio.gitHub}
        />

      </div>
      </div>
    </div>
  );
};

export default Fiends;