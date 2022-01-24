import React from "react";
import styled,{css}from "styled-components";

export const StyledCyrcle = styled.div`
width: 100px;
height: 100px;
background-color: #FF3C21;
border-radius: 50%;
border: solid 8px #D8D8D8;
margin-bottom: 8vh;
display: flex;
justify-content: center;
align-items: center;
font-size: 60px;

${props =>
    props.timeCircleFirst &&
    css`
    
    margin-top: 3vh;
    width: 200px;
    height: 200px;
    background:#D8D8D8;
     border:solid 20px #E51C1C;
      color: #3E3E3E;
      font-size: 35px;
    `};
    ${props =>
    props.timeCircleSec &&
    css`
    margin-top: 3vh;
    width: 200px;
    height: 200px;
    background:#D8D8D8;
     border:solid 20px #E1E51C;
      color: #3E3E3E;
      font-size: 35px;
    `};
    ${props =>
    props.timeCircleLast &&
    css`
    margin-top: 3vh;
    width: 200px;
    height: 200px;
    background:#D8D8D8;
     border:solid 20px #20E51C;
      color: #3E3E3E;
      font-size: 35px;
    `};
`
