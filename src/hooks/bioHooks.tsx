import { useState } from "react";
import{ BioType } from "../types/bioInterface";

const useBioState = () => {
 
  const [activeFiendPic, setActiveFiendPic] = useState("Alejo"); 
  const [activeFiend, setActiveFiend] = useState<string>("Alejo");

  const [activeFiendBio, setActiveFiendBio] = useState<BioType>({id:"0", name:"none", bio:"none", techStack:[], hobbies:[],linkedIn:"none",gitHub:"none" });
  return {activeFiend, setActiveFiend, activeFiendBio, setActiveFiendBio, activeFiendPic, setActiveFiendPic};

}
export default useBioState;

