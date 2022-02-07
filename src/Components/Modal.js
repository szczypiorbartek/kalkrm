import React,{useState} from "react";
import Adrenalina from "./Adrenalina";
import Oxygen from "./Oxygen";

import { StyledModal } from "../Style/StyledModal";
import ChildDrugs from "./ChildDrugs";

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
       {
           props.visibleChildDrug ? <ChildDrugs content={props.contentVisible}/> : ''
       }
       
   </StyledModal>
       
    )


}
export default Modal;