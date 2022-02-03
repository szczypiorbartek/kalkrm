import React from "react";
import styled,{css}from "styled-components";

export const StyledTimer = styled.div`
position: fixed;
top: 0;
width: 100vw;
height: 100vh;
background-color: #F2F2F2;
box-shadow: rgba(0, 0, 0, 0.20) 0px 5px 15px;


display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
animation: open ease-in-out .2s;


@keyframes open {
  0% { opacity:0}
  100% { 
    opacity:1;
  }
 
}

h1{
    font-size: 1.5em;
}
h2{
    font-size: 1.2em;
    color:#3E3E3E;
}

`