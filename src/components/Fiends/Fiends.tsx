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
    console.log(fiendBio)
    
  },[activeFiend,setActiveFiendBio])



  return (
    <div className="m-lg">
      <h1>Meet the Fiends</h1>
      <div>
        <FiendSpotlight />
      </div>
      <div>
        {/* <BioCard
          id = {activeFiendBio.id}
          name={activeFiendBio.name}
          bio={activeFiendBio.bio}
          techStack={activeFiendBio.techStack}
          hobbies={activeFiendBio.hobbies}
        /> */}

      </div>
      
    </div>
  );
};

export default Fiends;