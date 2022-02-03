import React, { useState, useEffect } from "react";
import { ButtonAreaStyled } from "../Style/ButtonAreaStyled";
import { StyledItemWrapper } from "../Style/StyledItemWrapper";
import { StyledButton } from "../Style/StyledButton";
import { StyledContent } from "../Style/StyledContent";
import { StyledInput } from "../Style/StyledInput";
import { StyledSelect } from "../Style/StyledSelect";
import { StyledCyrcle } from "../Style/StyledCyrcle";
import {ReactComponent as Close} from '../Assets/close.svg'
import {CheckStyled} from "../Style/CheckStyled"



import Alert from "./Alert";
import CheckSTyled from "../Style/CheckStyled";

export default function Adrenalina(props) {
  const [bradyActive, setBradyActive] = useState(true);
  const [shockActive, setShockActie] = useState(false);
  const [checkA, setCheckA] = useState(false);
  const [checkB, setCheckB] = useState(false);
  const [squirrel, setSquirrel] = useState({ a: "", b: "" });
  const [contentVisble, setContentVisible] = useState(false);

  const [brady, setBardy] = useState(0);
  const [shock, setShock] = useState(0);

  const [weightValue, setWeightValue] = useState();
  const [doseValue, setDoseValue] = useState();
  const [visibleAlert, setVisibleAlert] = useState(false);

  const changeVisibleTimer = () => {
    setVisibleAlert(true);
  };

  const getValue = () => {
    
    setContentVisible(false);
    setDoseValue('');
    setWeightValue(''); 
  };
  const changeBradyActive = () => {
    setShockActie(false) 
     setBradyActive(true)
     setDoseValue('')
     setWeightValue('')
  }
  const changeShockActive = () => {
    setShockActie(true) 
     setBradyActive(false)
     setDoseValue('')
    
  }
  useEffect(() => {
    setBardy((doseValue * 60) / squirrel.b);
  });
  useEffect(() => {
    setShock(((doseValue * weightValue * 60) / squirrel.b).toFixed(0));
  });
  useEffect(() => {
    setContentVisible(false);
  }, [doseValue]);
  useEffect(() => {
    setContentVisible(false);
  }, [squirrel]);

  return (
  
   
<StyledItemWrapper>
     <h1>Adrenalina w pompie</h1>
    { visibleAlert ?  <Alert close={()=>setVisibleAlert(false)}/> : ''}
   
       
     <ButtonAreaStyled>
       {bradyActive ? (
         <StyledButton
           primary
           onClick={changeBradyActive}
         >
           Bradykardia
         </StyledButton>
       ) : (
         <StyledButton
           onClick={changeBradyActive}
         >
           Bradykardia
         </StyledButton>
       )}
       {shockActive ? (
         <StyledButton
           primary
           onClick={changeShockActive}
         >
           Wstrząs
         </StyledButton>
       ) : (
         <StyledButton
           onClick={changeShockActive}
         >
           Wstrząs
         </StyledButton>
       )}
     </ButtonAreaStyled>
     {bradyActive ? (
       <p>Dawka w Bardykardi: 2-10 mcg/min</p>
     ) : (
       <p> Dawka we wstrząsie: 0.05 - 0.5mcg/kg/min</p>
     )}
     <label>
     <StyledInput
       placeholder="Podaj dawkę w mcg"
       type="number"
       value={doseValue}
       onChange={(e) => setDoseValue(e.target.value)}
     />
     {shockActive ? (
       <StyledInput
         placeholder="Podaj wagę w kg"
         type="number"
         value={weightValue}
         onChange={(e) => setWeightValue(e.target.value)}
       />
     ) : (
       ""
     )}
     </label>

     <ButtonAreaStyled>
       
         <CheckStyled>
         <input
           type="checkbox"
           checked={checkA}
           value={20}
           onChange={(e) => {
             setSquirrel({ a: "20", b: "50" });
             setCheckA(true);
             setCheckB(false);
           }}
         />
         <p>20 ml</p>
         
        
  
    <input
           type="checkbox"
           checked={checkB}
           value={50}
           onChange={(e) => {
             setSquirrel({ a: "50", b: "20" });
             setCheckB(true);
             setCheckA(false);
           }}
         />
         <p>50 ml</p>
         </CheckStyled>
       
     </ButtonAreaStyled>

     {(doseValue > 0) & contentVisble & (checkB || checkA) ? (
       <div>
         {bradyActive ? (
           <StyledContent>
             <h1>
               1 amp adrenaliny rozcieńczyć w {squirrel.a} ml 0.9% NaCl.
               Ustawić na pompie infuzyjnej przepływ na {brady} ml/h
             </h1>
           <StyledButton close onClick={getValue}>zamknij</StyledButton>
             
           </StyledContent>
         ) : (
           <StyledContent>
             <h1>
               1 amp adrenaliny rozcieńczyć w {squirrel.a} ml 0.9% NaCl.
               Ustawić na pompie przepływ na {shock} ml/h
             </h1>
             <StyledButton close onClick={getValue}>zamknij</StyledButton>
             
           </StyledContent>
         )}
       </div>
     ) : (
       ""
     )}
     {contentVisble ? (
       <StyledCyrcle  unvisible onClick={ getValue }> X </StyledCyrcle>
     ) : (
       <StyledCyrcle onClick={() =>{brady>0 || squirrel>0 ?  setContentVisible(true) : setVisibleAlert(true) }}> Licz </StyledCyrcle>
     )}
   </StyledItemWrapper>
 );

    
}
