import React from "react";
import styled,{css} from "styled-components";

export const StyledInput = styled.input`

margin: 20px;
font-size: 20px;
padding: 4%;
text-align: center;
outline: none;
border:none;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.20) 0px 5px 15px;
color:#3E3E3E;
background-color: #F2F2F2;

${props =>
    props.small &&
    css`
    width: 70vw;
    
    font-size: 20px;
    padding: 3%;
    @media (min-width:450px) {
     width: 30vw;
     font-size: 10px;
     padding: 2%;
     margin: 5px;
    
    }
    `};
    ${props =>
    props.xsmall &&
    css`
    width: 40vw;
    height: 40px;
    font-size: 20px;
    padding: 3%;
   
    @media (min-width:450px) {
    
     font-size: 10px;
     padding: 2%;

    }
    `};
    @media (min-width:450px) {
    
    font-size: 15px;
    padding: 2%;


   
`

