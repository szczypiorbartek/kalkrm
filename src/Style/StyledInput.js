import React from "react";
import styled,{css} from "styled-components";

export const StyledInput = styled.input`

width: 100%;
font-size: 20px;
padding: 5px 40px;
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
    padding: 8px 0px;
    font-size: 16px;
    @media (orientation:landscape) {
        padding:0;
        font-size: 13px;
    }
  
    `};
    ${props =>
    props.xsmall &&
    css`
    margin: 5px;
    height: 40px;
    font-size: 16px;
    padding: 5px 20px;
  
   
  
    `};

   
`

