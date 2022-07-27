import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ButtonAreaStyled } from "../Style/ButtonAreaStyled";
import { StyledItemWrapper } from "../Style/StyledItemWrapper";
import { StyledButton } from "../Style/StyledButton";
import { StyledContent } from "../Style/StyledContent";
// import { StyledInput } from "../Style/StyledInput";
import { StyledSelect } from "../Style/StyledSelect";
import { StyledCyrcle } from "../Style/StyledCyrcle";
import {ReactComponent as Close} from '../Assets/close.svg';
import {CheckStyled} from "../Style/CheckStyled";
import Alert from "./Alert";
import CheckSTyled from "../Style/CheckStyled";



const ButtonArea= styled.div`
position: relative;
width:100%;
padding: 20px 20px;
max-width: 320px;
top:10px;
left: auto;
margin-bottom: 15px;
justify-content: center;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
`

const CheckArea = styled.div`

  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;

 
  grid-column-start: 1;
  grid-column-end: 2;
  @media (orientation:landscape){
 
    grid-column-start: 1;
  grid-column-end: 3;
  }
  
  input {
    /* margin-right: 25px; */
   
    width: 15px;
    height: 15px;
    outline: none;
    border: none;
    margin: 0px 20px;
    /* margin-left: 25px; */
  }
`
const InputArea = styled.div`
position: relative;
width: 100%;
padding: 5px 0;
display: grid;
grid-gap: 40px;
grid-template-columns: 1fr;



@media (orientation:landscape){
 
  grid-template-columns: 1fr;
  width: 100%;


}
p{
  text-align: center;
}
`
const StyledInput = styled.input`
padding: 15px 10px;
font-size: 16px;

text-align: center;
outline: none;
border:none;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.20) 0px 5px 15px;
color:#3E3E3E;
background-color: #F2F2F2;
`

export default function Adrenalina(props) {
  const [bradyActive, setBradyActive] = useState(true);
  const [shockActive, setShockActie] = useState(false);
  const [checkA, setCheckA] = useState(false);
  const [checkB, setCheckB] = useState(false);
  const [squirrel, setSquirrel] = useState({ a: "", b: "" });
  const [contentVisble, setContentVisible] = useState(false);

  const [brady, setBardy] = useState(0);
  const [shock, setShock] = useState(0);

  const [weightValue, setWeightValue] = useState(0);
  const [doseValue, setDoseValue] = useState(0);
  const [visibleAlert, setVisibleAlert] = useState(false);

  const changeVisibleTimer = () => {
    setVisibleAlert(true);
  };

  const getValue = () => {
    
    setContentVisible(false);
    setDoseValue('');
    setWeightValue(''); 
    setCheckA(false)
    setCheckB(false)
    setBardy(0)
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
   
       
     <ButtonArea>
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
     </ButtonArea>
     {bradyActive ? (
       <p>Dawka w Bardykardi: 2-10 mcg/min</p>
     ) : (
       <p> Dawka we wstrząsie: 0.05 - 0.5mcg/kg/min</p>
     )}
     <InputArea>
     {
      bradyActive ?
      <input
       placeholder="Podaj dawkę w mcg"
        type="range"
        min='2'
        max='10'
       value={doseValue}
       onChange={(e) => setDoseValue(e.target.value)}
     />
     :
     <input
     
       placeholder="Podaj dawkę w mcg"
        type="range"
        min='0.05'
        max='0.5'
        step="0.01"
       value={doseValue}
       onChange={(e) => setDoseValue(e.target.value)}
     />

     }
     
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
    <p>{doseValue}</p>
     <CheckArea>
      
     
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
       <p>Strzykawka 20 ml</p>
       
      

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
       <p>Strzykawka 50 ml</p>
     
     
   </CheckArea>
     </InputArea>

     

     {contentVisble ? (
       <div>
         {bradyActive ? (
           <StyledContent>
             <h1>
               1 mg adrenaliny rozcieńczyć w {squirrel.a} ml 0.9% NaCl.
               Ustawić na pompie infuzyjnej przepływ na {brady} ml/h
             </h1>
           <StyledButton close onClick={getValue}>zamknij</StyledButton>
             
           </StyledContent>
         ) : (
           <StyledContent>
             <h1>
               1 mg adrenaliny rozcieńczyć w {squirrel.a} ml 0.9% NaCl.
               Ustawić na pompie przepływ na {shock} ml/h
             </h1>
             <StyledButton close onClick={getValue}>zamknij</StyledButton>
             
           </StyledContent>
         )}
       </div>
     ) : (
       ""
     )}
     {bradyActive ?
     doseValue > 0 &&  ( checkA || checkB) ===true ?  <StyledCyrcle onClick={() => setContentVisible(true)}> Licz </StyledCyrcle> : <StyledCyrcle unvisible>Licz</StyledCyrcle> : weightValue && doseValue &&   (checkA || checkB) ===true ?  <StyledCyrcle onClick={() => setContentVisible(true)}> Licz </StyledCyrcle> : ''
     }
    
   </StyledItemWrapper>
 );

    
}
