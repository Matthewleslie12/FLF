
import ResumeIcon from "../../assets/bio-card-icons/resume.svg";
import LinkedInLogo from "../../assets/bio-card-icons/linkedin.svg";
import GitHubLogo from "../../assets/bio-card-icons/github.svg";
import { BioType } from "../../types/bioInterface.tsx";

const BioCard = (BioCardProps:BioType) => {
  const { name, bio, techStack, hobbies } = BioCardProps;

  return (
    <div className="flex flex-col align-center border-4 border-borderPurple rounded-3xl pb-lg">
      <div className="text-center bg-gradient-to-b from-mainPurple to-white-500 rounded-tl-3xl rounded-tr-3xl">
        <h2 className="text-xs font-oxanium text-offWhite my-md font-bold" >{name}</h2>
      </div>
      <p className="font-oxanium text-[0.875rem] text-offWhite px-md mt-sm">{bio}</p>
      <div className="flex">
        <div className="flex flex-col">
          <div className="flex flex-col">
            <h3 className="text-[1.125rem] font-bebas text-offWhite mt-md mb-sm ml-sm flex">Technical Skills</h3>
            <ul className="list-disc flex flex-wrap align-center ml-lg">
              {techStack.map((tech,index) => (
                <li key={index} className="text-[0.875rem] font-oxanium text-offWhite w-[40%] mr-md" >{tech}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <h3 className="text-[1.125rem] font-bebas text-offWhite mt-sm mb-sm ml-sm flex" >Hobbies</h3>
            <ul className="list-disc flex flex-wrap align-center ml-lg">
              {hobbies.map((hobby,index) => (
                <li key={index} className="text-[0.875rem] font-oxanium text-offWhite w-[40%] mr-md">{hobby}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex self-end pr-sm">
          <ul className="list-none flex flex-col items-center ">
            <a href="RESUME ADD L8R" className="no-underline">
              <li className="w-[2.625rem] h-[2.5625rem]">
                <img src={ResumeIcon} alt="Resume Icon" className="w-[2.625rem] h-[2.5625rem]"></img>
              </li>
            </a>
            <a href="RESUME ADD L8R" className="no-underline ">
              <li className="w-[3.1875rem] h-[3.1875rem]">
                <img src={LinkedInLogo} alt="LinkedIn Logo" className="w-[3.1875rem] h-[3.1875rem] mt-md"></img>
              </li>
            </a>
            <a href="RESUME ADD L8R" className="no-underline">
              <li className="w-[2.625rem] h-[2.625rem]">
                <img src={GitHubLogo} alt="GitHub Logo" className="w-[2.625rem] h-[2.625rem] mt-sm"></img>
            </li></a>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BioCard;