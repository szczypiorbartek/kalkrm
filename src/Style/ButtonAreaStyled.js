import React from "react";
import styled,{css} from "styled-components";

export const ButtonAreaStyled = styled.div`
width: 90%;
max-width: 520px;
margin-bottom: 2vh;
justify-content: center;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 20px;
padding-left: 15px;
padding-right: 15px;
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
    `};

 
`