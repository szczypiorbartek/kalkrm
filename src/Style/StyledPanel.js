import React from "react";
import styled from "styled-components";

export const StyledPanel = styled.div`
/* position: relative;
width: 95%;
height: 100%;
padding-bottom: 100px;
padding-top: 5vh;
height: auto;

display: flex;
justify-content: center;
flex-direction: row;
flex-wrap: wrap; */

position: absolute;
left: 0;
width: 100%;
top:10%;
z-index: 0;

padding:0px 20px;
display: grid;
grid-gap: 10px;
grid-template-columns: repeat(2, 1fr);
 @media (orientation:landscape) {
  top:75px;
  padding:40px 120px;
 }



`