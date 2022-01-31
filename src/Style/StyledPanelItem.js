import React from "react";
import styled from "styled-components";
export const StyledPanelItem = styled.div`

background-color: #BDBDBD;

border-radius: 10%;
box-shadow: rgba(0, 0, 0, 0.70) 0px 5px 15px;
display:flex;
justify-content: space-around;
align-items: center;
flex-direction: column;
padding-top: 2vh;
padding-bottom: 2vh;


@media (min-width: 300px) and (max-width:699px) {

img{
      width: 70px;
      height: 70px;
     
  }
    
}

@media (min-width: 700px) {



  img{
      width: 100px;
      height: 80px;
     
  }
}
@media (max-width: 300px) {
  position: relative;
   height: 180px;
   margin-bottom: 10px;
}


`