import logo from "../../assets/Logo-FLF.svg";
import line from "../../assets/nav-icons/Line 2.svg";
import useMenuState from "../../hooks/navHooks.tsx";
import CloseButton from "../../assets/nav-icons/close-btn.svg";
import DevilLogo from "../../assets/nav-icons/devil-logo.svg";
import "./NavBar.scss";
import { useEffect } from "react";

const NavBar = () => {

  const { isMenuOpen, setIsMenuOpen } = useMenuState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen, "isMenuOpen")
  };

  const smoothScrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Need to add id to each section. Ex id="team" id="projects" id="home"

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(true);
      } else {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className="flex justify-between items-center h-20 md:h-[8rem] mx-[1rem] md:mx-[1rem] xl:max-w-[1240px] xl:m-auto">
      {!isMenuOpen ? 
        <img src={logo} alt="Full FLF Logo" className="h-6 w-auto animate-fadeOut cursor-pointer" />
        :
        <>
        <img src={DevilLogo} alt="Devil FLF Logo" className="animate-fadeIn md:hidden cursor-pointer"/>
        <img src={logo} alt="Full FLF Logo" className="h-6 md:h-10 xl:h-14 w-auto cursor-pointer animate-fadeOut md:block hidden " />
        </>
      } 
      {!isMenuOpen ? 
          <div
            className="rounded-full w-12 h-12 hamburger-gradient flex flex-col py-2 cursor-pointer justify-center hover:border-2 hover:border-white-500 animate-fadeOut"
            onClick={toggleMenu} 
          >
            <img src={line} alt="" className="mx-auto py-1" />
            <img src={line} alt="" className="mx-auto py-1" />
            <img src={line} alt="" className="mx-auto py-1" />
          </div>
          :
          <div 
            className="font-bebas text-white text-sm md:text-[2.5rem] animate-fadeIn"
          >
            <div className="flex flex gap-4 align-item">
              <ul className="flex gap-4 md:gap-10 items-center justify-center xl:mr-[4rem]">
                <li 
                  className="cursor-pointer border-b-[.0625rem] border-transparent hover:border-white transition duration-300"
                  onClick={() => smoothScrollToSection('home')}
                >HOME</li>
                <li 
                  className="cursor-pointer border-b-[.0625rem] border-transparent hover:border-white transition duration-300"
                  onClick={() => smoothScrollToSection('projects')}
                >PROJECTS</li>
                <li 
                  className="cursor-pointer border-b-[.0625rem] border-transparent hover:border-white transition duration-300"
                  onClick={() => smoothScrollToSection('team')}
                >TEAM</li>
              </ul>
              <div className="w-12 h-12 flex items-center justify-center md:hidden">
                <img className="pb-1 w-8 h-8 cursor-pointer" onClick={toggleMenu} src={CloseButton} alt="Close Button" />
              </div>
            </div>
          </div>
      }
    </nav>
  );
};

export default NavBar;
