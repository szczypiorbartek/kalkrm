import React from "react";
import styled,{css} from "styled-components";

export const StyledInput = styled.input`

margin: 10px;
font-size: 20px;
padding: 2%;
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
    height: 5vh;
    font-size: 20px;
    padding: 3%;
    `};
    ${props =>
    props.xsmall &&
    css`
    width: 30vw;
    height: 4vh;
    font-size: 20px;
    padding: 3%;
    transform: translateY(150);
    `};

    @media (min-width:450px) {
     width: 180px;
     height: 25px;
     font-size: 10px;
    
    }

   
`

