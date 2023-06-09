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
    <nav className="relative flex justify-between items-center h-20 md:h-[8rem] px-[1rem] md:px-[1rem] xl:max-w-[1280px] xl:m-auto">
      {!isMenuOpen ? 
        <img src={logo} alt="Full FLF Logo" className="h-6 w-auto animate-fadeOut cursor-pointer z-10 relative" />
        :
        <>
        <img src={DevilLogo} alt="Devil FLF Logo" className="animate-fadeIn md:hidden cursor-pointer z-10 relative"/>
        <img src={logo} alt="Full FLF Logo" className="h-6 md:h-10 xl:h-9 w-auto cursor-pointer animate-fadeOut md:block hidden z-10 relative" />
        </>
      } 
      {!isMenuOpen ? 
          <div
            className="rounded-full w-12 h-12 hamburger-gradient flex flex-col py-2 cursor-pointer justify-center animate-fadeOut"
            onClick={toggleMenu} 
            style={{ background: 'linear-gradient(90deg, rgb(96,10,182) 0%, rgb(96,10,182,0.5) 100%)' }}
          >
            <img src={line} alt="" className="mx-auto py-1" />
            <img src={line} alt="" className="mx-auto py-1" />
            <img src={line} alt="" className="mx-auto py-1" />
          </div>
          :
          <div 
            className="font-bebas text-white text-sm md:text-[1.625rem] lg:text-md] animate-fadeIn"
          >
            <div className="flex flex gap-4 align-item z-10 relative">
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
            <div className={`absolute z-1 top-0 left-0 w-full bg-gradient-to-b from-purple-950 to-transparent h-12 md:h-[5rem]`}>
            </div>
          </div>
      }
    </nav>
  );
};

export default NavBar;
