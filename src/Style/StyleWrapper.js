import React from "react";
 import styled from "styled-components";

 export const StyledWrapper = styled.div`
width: 100%;
height: 100vh;
max-width: 1000px;
margin: 0 auto;
display: flex;
flex-direction: column;
background-color: ${(props)=>props.theme.colors.powderWhite};
overflow-x: hidden;
 label {
    position: relative;
    width: 95%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }
 h1{
     margin-top: 25px;
     font-size: 1.4em;
     color:#3E3E3E;
 }
 
 `