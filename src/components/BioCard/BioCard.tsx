
import ResumeIcon from "../../assets/bio-card-icons/resume.svg";
import LinkedInLogo from "../../assets/bio-card-icons/linkedin.svg";
import GitHubLogo from "../../assets/bio-card-icons/github.svg";
import { BioType } from "../../types/bioInterface.tsx";
import Ben from "../../assets/fiends-pics/ben.jpg";
import Alejo from "../../assets/fiends-pics/alejo.jpg";
import Trap from "../../assets/fiends-pics/trap.jfif";
import NG from "../../assets/fiends-pics/NGKao.jpg";
import Matt from "../../assets/fiends-pics/matt.png"
import Sam from "../../assets/fiends-pics/sam.jpg";
import useBioState from "../../hooks/bioHooks.tsx";
import { useEffect } from "react";

const BioCard = (BioCardProps:BioType) => {
  const { name, bio, techStack, hobbies,id, linkedIn, gitHub } = BioCardProps;

  const { activeFiendPic, setActiveFiendPic } = useBioState();

  useEffect(() => {
    if (id === "Alejo") {
      setActiveFiendPic(Alejo);
    } else if (id === "Ben") {
      setActiveFiendPic(Ben);
    } else if (id === "Trap") {
      setActiveFiendPic(Trap);
    }
    else if (id==="NG"){
      setActiveFiendPic(NG);
    }else if (id==="Matthew"){
      setActiveFiendPic(Matt);
    }else if (id==="Sam"){
      setActiveFiendPic(Sam)
    }
    
  }

  
  ,[id,setActiveFiendPic])


  

  return (
    <div className="flex flex-col align-center border-4 border-borderPurple rounded-3xl pb-lg md:max-w-[25rem] relative max-w-[25rem] md:h-[32.8125rem]">
      <div className="text-center bg-gradient-to-b from-mainPurple to-white-500 rounded-tl-3xl rounded-tr-3xl md:flex">
        <h2 className="text-xs font-oxanium text-offWhite my-md font-bold md:text-[2.25rem] md:w-[15.375rem] md:text-left md:ml-[1rem]" >{name}</h2>
        {activeFiendPic && <div className="hidden md:flex rounded-full border-[0.625rem] border-borderPurple absolute top-[-5.5rem] right-[1rem]"><img src={activeFiendPic} alt="Fiend Pic" className="w-[10.2rem] h-[10.2rem] rounded-full "></img></div>}
      </div>
      <p className="font-oxanium text-[0.875rem] text-offWhite px-md mt-sm">{bio}</p>
      <div className="flex h-full ">
        <div className="flex flex-col md:justify-end h-full">
          <div className="flex flex-col">
            <h3 className="text-[1.125rem] font-bebas text-offWhite mt-md mb-sm ml-sm flex md:text-xs">Technical Skills</h3>
            <ul className="list-disc flex flex-wrap align-center ml-lg">
              {techStack.map((tech,index) => (
                <li key={index} className="text-[0.875rem] font-oxanium text-offWhite w-[40%] mr-md" >{tech}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[1.125rem] font-bebas text-offWhite mt-sm mb-sm ml-sm flex md:text-xs" >Hobbies</h3>
            <ul className="list-disc flex flex-wrap align-center ml-lg">
              {hobbies.map((hobby,index) => (
                <li key={index} className="text-[0.875rem] font-oxanium text-offWhite w-[40%] mr-md">{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex self-end mr-sm">
          <ul className="list-none flex flex-col items-center ">
            <a href="RESUME ADD L8R" className="no-underline">
              <li className="">
                <img src={ResumeIcon} alt="Resume Icon" className="min-w-[2.625rem] min-h-[2.5625rem] md:min-h-[3.125rem] md:min-w-[3.125rem]"></img>
              </li>
            </a>
            <a href={linkedIn} className="no-underline ">
              <li className="">
                <img src={LinkedInLogo} alt="LinkedIn Logo" className="min-w-[3.1875rem] min-h-[3.1875rem] md:min-h-[3.125rem] md:min-w-[3.125rem mt-md"></img>
              </li>
            </a>
            <a href={gitHub} className="no-underline">
              <li className="">
                <img src={GitHubLogo} alt="GitHub Logo" className="min-w-[2.625rem] min-h-[2.625rem] md:min-h-[3.125rem] md:min-w-[3.125rem] mt-sm "></img>
              </li>
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BioCard;