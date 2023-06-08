import logo from "../../assets/Logo.png";
import line from "../../assets/Line 2.svg";

const NavBar = () => {
  return (
    <nav className="flex justify-between pt-4">
      <img src={logo} alt="FLF Logo" className="h-5 w-40" />
      <div
        className="rounded-full w-12 h-12 hamburger-gradient mr-4 flex flex-col py-2 cursor-pointer"
        // onClick={}
      >
        <img src={line} alt="" className="mx-auto py-1" />
        <img src={line} alt="" className="mx-auto py-1" />
        <img src={line} alt="" className="mx-auto py-1" />
      </div>
    </nav>
  );
};

export default NavBar;
