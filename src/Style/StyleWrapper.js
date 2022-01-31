import React from "react";
 import styled from "styled-components";

 export const StyledWrapper = styled.div`
 position: relative;
 width:100%;
 height: 100%;
 
 background-color: #D8D8D8;
 display: flex;
 justify-content: space-between;
 align-items:center;
 flex-direction: column;
 h1{
     margin-top: 25px;
     font-size: 1.4em;
     color:#3E3E3E;
 }
 @media (min-width: 300px) and (max-width:699px) {
  
   height:100%;
    
}
 @media (min-width: 700px) {
     display: flex;
    width: 750px;
    height: 100%;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.70) 0px 5px 15px;
}
@media (max-width: 299px) {
    height: auto;
    padding-bottom: 10%;
  
}


 `