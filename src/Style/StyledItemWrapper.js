import React from "react";
import styled,{css} from "styled-components";

export const StyledItemWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #FDFFFC;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 1.3em;
  }
  p {
    font-size: 1em;
    margin: 35px 0;
  }
  label {
    position: relative;
    width: 80%;
    height: 80px;
    margin: 20px 0px;
  
   

    
  }
  ${props =>
    props.drugs &&
    css`
     height: auto;
      color: white;
    `};
  @media (min-width: 450px) {
    
    h1 {
      font-size: .8em;
    }
    p {
      font-size: 0.6rem;
      margin: 5px 0px;
    }

    label {
      position: relative;
      flex-direction: row;
      position: relative;
      width: 60%;
     height: auto;
     
      display: flex;
      justify-content: center;
      margin: 0;
    }
  }

  @media (min-width:500px) {
     
    }
`;
