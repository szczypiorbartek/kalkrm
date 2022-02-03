import React from "react";
import styled,{css}from "styled-components";

export const StyledCyrcle = styled.div`
position: relative;
background-color: #FF3C21;
padding: 2% 5%;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.60) 0px 5px 15px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.5em;
color: white;
top: 20;

${props=>props.unvisible &&
css`
display: none;
`}

 @media (min-width: 450px){
    width: 125px;
height: 40px;
} 
`
