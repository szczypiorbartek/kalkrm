import React, { useState } from 'react';
import { ButtonAreaStyled } from '../Style/ButtonAreaStyled';
import { CheckStyled } from '../Style/CheckStyled';
import { StyledButton } from '../Style/StyledButton';
import { StyledInput } from '../Style/StyledInput';
import { StyledItemWrapper } from '../Style/StyledItemWrapper';
import { StyledRowInput } from '../Style/StyledRowInput';

export default function ChildDrugs() {
    const [weightMode, setWeightMode]=useState(true)
    const [ageMode,setAgeMode]= useState(false)

    const changeWeightMode=(e)=>{
        setWeightMode(true)
        setAgeMode(false)

    }
    const changeAgeMode=(e)=>{
        setWeightMode(false)
        setAgeMode(true)

    }
        
    

    return(
        <StyledItemWrapper>
        <h1>Dawki leków dla dzieci</h1>
        <ButtonAreaStyled>
           {weightMode ? <StyledButton primary onClick={changeWeightMode}>Waga</StyledButton> : <StyledButton onClick={changeWeightMode} >Waga</StyledButton>}
           {ageMode ? <StyledButton primary onClick={changeAgeMode} >Wiek</StyledButton> : <StyledButton onClick={changeAgeMode} >Wiek</StyledButton>}
        </ButtonAreaStyled>
       {weightMode?<StyledInput placeholder='wpisz wagę dziecka'/> :<StyledInput placeholder='wpisz wiek dziecka'/>} 
    </StyledItemWrapper>
    )
 
 
}
