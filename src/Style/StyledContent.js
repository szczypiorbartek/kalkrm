import React from "react";
import styled from "styled-components";

export const StyledContent = styled.div`

width: 85vw;
min-height: 25vh;
max-height: 43vh;
display: flex;
justify-content: center;
align-items: center;
background-color: #F2F2F2;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.20) 0px 5px 15px;
text-align: center;
padding: 5%;
animation: open  0.2s ease-in-out;


@keyframes open {
  0% { 
      opacity:0
    }
  100% { 
    opacity:1;
  }


h1{
    font-size: 25px;
    line-height: 35px;
}

`