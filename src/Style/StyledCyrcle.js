import React from "react";
import styled,{css}from "styled-components";

export const StyledCyrcle = styled.div`
position: fixed;
z-index: 1;
width: 100%;
height: 20vh;
top:0;
left: 0;
background-color: #FF3C21;
padding: 5px 40px;

box-shadow: rgba(0, 0, 0, 0.60) 0px 5px 15px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5em;
color: white;

animation: open  0.2s ease-in-out;
@keyframes open {
  0% { 
      opacity:0
    }
  100% { 
    opacity:1;
  }
}



${props=>props.unvisible &&
css`
display: none;
`}

 @media (orientation: landscape){
padding: 2px 40px;
bottom: 15px;
} 
`
