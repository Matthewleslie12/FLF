import logo from "../../assets/Logo.png";
import line from "../../assets/nav-icons/Line 2.svg";
import useMenuState from "../../hooks/navHooks.tsx";
import CloseButton from "../../assets/nav-icons/close-btn.svg";
import DevilLogo from "../../assets/nav-icons/devil-logo.svg"

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

  return (
    <nav className="flex justify-between items-center h-20 mx-[1rem]">
      {!isMenuOpen ? 
        <img src={logo} alt="Full FLF Logo" className="h-6 w-auto" />
        :
        <img src={DevilLogo} alt="Devil FLF Logo"/>
      }
      {!isMenuOpen ? 
            <div
            className="rounded-full w-12 h-12 hamburger-gradient flex flex-col py-2 cursor-pointer justify-center hover:border-2 hover:border-white-500"
            onClick={toggleMenu} 
          >
            <img src={line} alt="" className="mx-auto py-1" />
            <img src={line} alt="" className="mx-auto py-1" />
            <img src={line} alt="" className="mx-auto py-1" />
          </div>
          :
          <div 
            className="font-bebas text-white text-xs"
          >
            <div className="flex flex gap-4 align-item">
              <ul className="flex gap-4">
                <li 
                  className="cursor-pointer"
                  onClick={() => smoothScrollToSection('home')}
                >HOME</li>
                <li 
                  className="cursor-pointer"
                  onClick={() => smoothScrollToSection('projects')}
                >PROJECTS</li>
                <li 
                  className="cursor-pointer"
                  onClick={() => smoothScrollToSection('team')}
                >TEAM</li>
              </ul>
              <img className="pb-1 cursor-pointer" onClick={toggleMenu} src={CloseButton} alt="Close Button" />
            </div>
          </div>
      }
    </nav>
  );
};

export default NavBar;
