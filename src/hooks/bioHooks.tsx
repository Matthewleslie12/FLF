import { useState } from "react";
import{ BioType } from "../types/bioInterface";

const useBioState = () => {
 

  const [activeFiend, setActiveFiend] = useState("alejo");

  const [activeFiendBio, setActiveFiendBio] = useState<BioType>({id:"0", name:"none", bio:"none", techStack:[], hobbies:[]});
  return {activeFiend, setActiveFiend, activeFiendBio, setActiveFiendBio};

}
export default useBioState;

