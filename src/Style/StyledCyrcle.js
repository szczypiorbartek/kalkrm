import React from "react";
import styled,{css}from "styled-components";

export const StyledCyrcle = styled.div`
position: absolute;
width: 200px;
height: 80px;
background-color: #FF3C21;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.60) 0px 5px 15px;
top: 350px;
display: flex;
justify-content: center;
align-items: center;
font-size: 50px;
color: white;

${props=>props.unvisible &&
css`
display: none;
`}

@media (min-width: 450px){
    top: 250px;
    width: 150px;
height: 50px;
}
`
