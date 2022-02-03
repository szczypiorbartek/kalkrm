import React from "react";
import styled,{css} from "styled-components";

export const ButtonAreaStyled = styled.div`

width:95%;
max-width: 320px;

margin-bottom: 2vh;
justify-content: center;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
padding-left: 15px;
padding-right: 15px;
label{
    width: 95%;
   display: flex;
   flex-direction: row;
   
   
}
${props =>
    props.small &&
    css`
    height: 20vw;
    margin:0px;
    `};
    @media (min-width:450px) {
     width: 80%;
     font-size: 10px;
     justify-content: center;
     
    }

`