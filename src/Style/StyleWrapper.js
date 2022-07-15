import React from "react";
 import styled from "styled-components";

 export const StyledWrapper = styled.div`
 position: relative;
width: 100%;
height: 100vh;
padding: 0 40px;
max-width: 1000px;
margin: 0 auto;
display: flex;
flex-direction: column;
background-color: ${(props)=>props.theme.colors.powderWhite};
overflow-x: hidden;

 h1{
     margin-top: 25px;
     font-size: 1.4em;
     color:#3E3E3E;
 }
 
 `