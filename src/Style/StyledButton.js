import React from "react";
import styled,{css} from "styled-components";

export const StyledButton= styled.button`
min-width: 30vw;
height: 5vh;
margin-top: 3vh;
font-size: 20px;
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
      background: #7370F9;
      color: white;
    `};

`