import React from "react";
import Adrenalina from "./Adrenalina";
import Oxygen from "./Oxygen";
import { useState } from "react/cjs/react.development";
import { StyledModal } from "../Style/StyledModal";

const Modal = (props) =>{
const visibleAdrenalina = useState(props.visibleAdrenalina)
    return(

   <StyledModal>
       {
           props.visibleAdrenalina ? <Adrenalina content={props.contentVisible}/> : ''
       }
         {
           props.visibleOxygen ? <Oxygen/> : ''
       }
       
   </StyledModal>
       
    )


}
export default Modal;