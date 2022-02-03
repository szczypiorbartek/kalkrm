import React from "react";
import styled,{css} from "styled-components";

export const StyledButton= styled.button`
margin-top: 3vh;
font-size: 18px;
width: 150px;
height: 50px;
padding: 4%;

box-shadow: rgba(0, 0, 0, 0.20) 0px 5px 15px;
background-color: #E9E9E9;
border:none;
border-radius: 15px;
color:#3E3E3E;
font-weight: bold;
transition: .5s;

${props =>
    props.primary &&
    css`
      background: #7899D4;
      color: white;
    `};
    ${props =>
    props.close &&
    css`
     width: 40%;
height: 30px;
background-color: red;
opacity: .8;
color: white;
display: flex;
border: none;
justify-content: center;
align-items:center;
border-radius: 10px;
margin-bottom:10px;
    `};
    @media (min-width:450px) {
      font-size: 10px;
      padding: 2%;
      width: 140px;
height: 30px;
   
}

`

