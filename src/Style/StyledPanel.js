import React from "react";
import styled from "styled-components";

export const StyledPanel = styled.div`
position: absolute;
width: 90%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 25px;

@media (min-width: 300px) and (max-width:699px) {
   position: relative;
    width: 80%;
    top: 5%
 
   
   
}

@media (min-width: 700px) {
    position: absolute;
    top:5%;
    bottom: 5%;
    margin-top: 2%;
    width: 60%;
    height: 60%;
   
    
   
    
   
}
@media (max-width: 300px) {
    position: relative;
    padding-bottom: 5vh;
    padding-top: 2vh;
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
}


`