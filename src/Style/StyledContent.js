import React from "react";
import styled from "styled-components";

export const StyledContent = styled.div`
position: relative;
width: 85vw;
min-height: 25vh;
max-height: 43vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #F2F2F2;
border-radius: 20px;
box-shadow: rgba(0, 0, 0, 0.20) 0px 5px 15px;
text-align: center;
padding: 2%;
animation: open  0.2s ease-in-out;
margin-bottom: 10px;

h1{
    font-size: 1.2em;
    line-height: 35px;
    
}
 svg{
   width: 35px;
   height: 35px;
   margin-left: 80%;
  
  

 }

@keyframes open {
  0% { 
      opacity:0
    }
  100% { 
    opacity:1;
  }
}



`