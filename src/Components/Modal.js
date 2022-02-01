import React,{useState} from "react";
import Adrenalina from "./Adrenalina";
import Oxygen from "./Oxygen";

import { StyledModal } from "../Style/StyledModal";

const Modal = (props) =>{
const visibleAdrenalina = useState(props.visibleAdrenalina)
    return(

   <StyledModal>
       {
           props.visibleAdrenalina ? <Adrenalina content={props.contentVisible}/> : ''
       }
         {
           props.visibleOxygen ? <Oxygen content={props.contentVisible}/> : ''
       }
       
   </StyledModal>
       
    )


}
export default Modal;