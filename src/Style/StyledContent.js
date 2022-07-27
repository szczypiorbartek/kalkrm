import React from "react";
import styled from "styled-components";

export const StyledContent = styled.div`
position: fixed;
z-index: 2;
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
background-color: #F2F2F2;

box-shadow: rgba(0, 0, 0, 0.20) 0px 5px 15px;
text-align: center;
animation: open  0.2s ease-in-out;
/* margin-bottom: 10px; */
padding: 2%;
top:0;
left: 0;
h1{
    font-size: 1em;
    margin: 20px;
   
    
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
@media (min-width:450px) {
   font-size: .8em;
    }




`