import logo from "../../assets/Logo.png";
import line from "../../assets/nav-icons/Line 2.svg";
import useMenuState from "../../hooks/navHooks.tsx";
import CloseButton from "../../assets/nav-icons/close-btn.svg";

const NavBar = () => {

  const { isMenuOpen, setIsMenuOpen } = useMenuState();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen, "isMenuOpen")
  };

  return (
    <nav className="flex justify-between pt-4 h-20">
      <img src={logo} alt="FLF Logo" className="h-5 w-40" />
      {!isMenuOpen ? 
            <div
            className="rounded-full w-12 h-12 hamburger-gradient mr-4 flex flex-col py-2 cursor-pointer justify-center hover:border-2 hover:border-white-500"
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
                <li>HOME</li>
                <li>PROJECTS</li>
                <li>TEAM</li>
              </ul>
              <img className="pb-1" onClick={toggleMenu} src={CloseButton} alt="Close Button" />
            </div>
          </div>
      
      }

    </nav>
  );
};

export default NavBar;
