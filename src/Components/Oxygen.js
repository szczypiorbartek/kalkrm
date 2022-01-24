import React, { useState } from "react";
import { ButtonAreaStyled } from "../Style/ButtonAreaStyled";
import { StyledItemWrapper } from "../Style/StyledItemWrapper";
import { StyledButton } from "../Style/StyledButton";
import { StyledInput } from "../Style/StyledInput";
import { StyledCyrcle } from "../Style/StyledCyrcle";
import { StyledSelect } from "../Style/StyledSelect";
import { StyledRowInput } from "../Style/StyledRowInput";

export default function Oxygen(props) {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState();
  const [valueC, setValueC] = useState();

  const [valueD, setValueD] = useState();
  const [valueE, setValueE] = useState();

  const [activeButtonA, setActiveButtonA] = useState(true)
  const [activeButtonB, setActiveButtonB] = useState(false)

  return (
    <StyledItemWrapper>
      <ButtonAreaStyled>
          {activeButtonA ?<StyledButton primary onClick={()=>setActiveButtonA(true) & setActiveButtonB(false)}>Tlenoterapia Bierna</StyledButton> : <StyledButton onClick={()=>setActiveButtonA(true) & setActiveButtonB(false)} >Tlenoterapia Bierna</StyledButton> }
        {activeButtonB ? <StyledButton primary onClick={()=>setActiveButtonB(true) & setActiveButtonA(false) }>Respirator</StyledButton>:<StyledButton onClick={()=>setActiveButtonB(true) & setActiveButtonA(false)}>Respirator</StyledButton>}
        
      </ButtonAreaStyled>  
      {activeButtonB ? <ButtonAreaStyled small>
        <label>
          <StyledSelect
            type="checkbox"
          />
          <p>FiO2=1</p>
        </label>

        <label>
          <StyledSelect
            type="checkbox"
          />
          <p>FiO2=0.5</p>
        </label>
      </ButtonAreaStyled> : ''}
      <p>Oddechy</p>
       
{activeButtonB ?
 <StyledRowInput>
          <StyledInput xsmall placeholder="ilość" onChange={(e)=>setValueD(e.target.value)}/>
          <StyledInput xsmall placeholder="objętość" onChange={(e)=>setValueE(e.target.value)}/>
        </StyledRowInput>:''
}
          
      <StyledInput
      small
        placeholder="ciśnienie w butli bar/atm"
        onChange={(e) => setValueA(e.target.value)}
      />
      {
        activeButtonA ? <StyledInput
        small
          placeholder="przepływ tlenu"
          onChange={(e) => setValueB(e.target.value)}
        />: ''
      }
      
      <StyledInput
      small
        placeholder="pojemność butli"
        onChange={(e) => setValueC(e.target.value)}
      />

      {(valueA > 0) &(valueC > 0) & props.content ? (
        <>
          {(valueA * valueC) / valueB >= 60 ? (
            <StyledCyrcle timeCircleLast>
             {activeButtonA ? ((valueA * valueC) / valueB).toFixed(0): ((valueA * valueC) /((valueD/1000)*valueE)).toFixed(0)} min
            </StyledCyrcle>
          ) : (valueA * valueC) / valueB <= 60 &&
            (valueA * valueC) / valueB >= 30 ? (
            <StyledCyrcle timeCircleSec>
              {activeButtonA ? ((valueA * valueC) / valueB).toFixed(0): "Respi"} min
            </StyledCyrcle>
          ) : (
            <StyledCyrcle timeCircleFirst>
              {activeButtonA ? ((valueA * valueC) / valueB).toFixed(0):((valueA * valueC) /(valueD*valueE)).toFixed(0)} min
            </StyledCyrcle>
          )}
        </>
      ) : (
        ""
      )}
    </StyledItemWrapper>
  );
}
