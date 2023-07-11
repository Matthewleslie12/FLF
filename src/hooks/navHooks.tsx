import {useState} from "react";
// import{ NavType } from "../types/navType";

const useMenuState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return {isMenuOpen, setIsMenuOpen};
};

export default useMenuState;
