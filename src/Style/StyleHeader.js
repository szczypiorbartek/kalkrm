import React from "react";
import styled,{css} from "styled-components";

export const StyledHeader = styled.div`

  position: fixed;
  width:120px;
  height: 100vh;
  top: 0;
 left: 0px;
  /* background-color: #7899D4; */

  background-color: black ;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  color: white;
  /* border-top-left-radius: 30px;
  border-top-right-radius: 30px; */
  padding: 10px 0px;
  color: red;
  font-weight: bold;
  text-transform: u;
  opacity: .9;
  animation: .2s linear slidein;
 
  

  svg {
    width: 35px;
    height: 35px;
  
  }
  @keyframes slidein {
  from {
  transform: translateX(-100px);
  }

  75% {
    transform: translateX(-50x);
  }

  to {
    transform: translateX(0px);
  }
}
  
  ${props =>
  props.hide &&
  css`
  position: fixed;
  top: 0;
  left: 0;
  width:55px;
height: 60px;
padding: 10px 10px;
transform: translateX(0);
background-color:black ;
border-top-right-radius:10px;
border-bottom-right-radius:10px;
animation: none;
justify-content:center;
align-item:center;
 svg{
   width: 25px;
   height: 25px;
 }
 
 

  `}
 
`
