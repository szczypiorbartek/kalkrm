import React from "react";
 import styled from "styled-components";

 export const StyledWrapper = styled.div`
 position: relative;
 width:100%;
 height: 100vh;
 
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
 @media (min-width: 750px) {
    width: 750px;
    height: 90vh;
    border-radius: 20px;
    box-shadow: rgba(0, 0, 0, 0.70) 0px 5px 15px;
}

 `