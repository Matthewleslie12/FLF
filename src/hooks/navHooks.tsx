import {useState} from "react";

const useMenuState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return {isMenuOpen, toggleMenu};
};

export default useMenuState;
