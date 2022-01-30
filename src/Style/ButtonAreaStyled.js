import React from "react";
import styled,{css} from "styled-components";

export const ButtonAreaStyled = styled.div`
width: 100%;
margin-bottom: 2vh;
height: auto;
justify-content: center;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
padding-left: 4vw;
padding-right: 4vw;
label{
   display: flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   
}
${props =>
    props.small &&
    css`
    height: 20vw;
    margin:0px;
    @media (min-width: 750px) {
    width: 750px;
    height: 100px;
    
   
    `};

    @media (min-width: 750px) {
    width: 750px;
   
}
`