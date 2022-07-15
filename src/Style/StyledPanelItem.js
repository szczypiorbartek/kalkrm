import React from "react";
import styled from "styled-components";
export const StyledPanelItem = styled.div`

border-radius: 25px;
padding: 10px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: space-around;
&:nth-last-of-type(1){
  background-color: ${(props)=>props.theme.colors.red};
  grid-column-start: 1;
  grid-column-end: 3;
  
} 
&:nth-last-of-type(2){
  background-color: ${(props)=>props.theme.colors.violet};
  
} 
&:nth-last-of-type(3){
  background-color: ${(props)=>props.theme.colors.orange};
  
} 
&:nth-last-of-type(4){
  background-color: ${(props)=>props.theme.colors.lightBlue};
  
} 
&:nth-last-of-type(5){
  background-color: ${(props)=>props.theme.colors.darkGreen};
  
} 
p{
  font-size: ${(props)=>props.theme.fontSizes.small};
color:${(props) =>props.theme.colors.powderWhite};
font-size: ${(props)=>props.theme.fontSizes.xsmall};
text-transform: uppercase;
margin-top: 15px;
}



`