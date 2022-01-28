import React from "react";
import styled,{css}from "styled-components";

export const StyledTimer = styled.div`
width: 80vw;
height: 22vh;
background-color: #E9E9E9;
box-shadow: rgba(0, 0, 0, 0.20) 0px 5px 15px;
border-radius: 20px;
margin-top: 2%;
margin-bottom: 15vh;
display: flex;
flex-direction: column;
justify-content:space-around;
align-items: center;
animation: open ease-in-out .2s;


@keyframes open {
  0% { opacity:0}
  100% { 
    opacity:1;
  }
 
}

h1{
    font-size: 3em;
}
h2{
    font-size: 1.5em;
    color:#3E3E3E;
}
${props =>
    props.primary &&
    css`
      border: solid green 15px
    `};
    ${props =>
    props.secondary &&
    css`
      border: solid yellow 15px
    `};
    ${props =>
    props.last &&
    css`
      border: solid red 15px
    `};
`