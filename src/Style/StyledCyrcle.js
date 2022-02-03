import React from "react";
import styled,{css}from "styled-components";

export const StyledCyrcle = styled.div`
position: relative;
background-color: #FF3C21;
padding: 15px 75px;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.60) 0px 5px 15px;


display: flex;
justify-content: center;
align-items: center;
font-size: 2em;
color: white;

${props=>props.unvisible &&
css`
display: none;
`}

@media (min-width: 450px){
    width: 150px;
height: 50px;
}
`
