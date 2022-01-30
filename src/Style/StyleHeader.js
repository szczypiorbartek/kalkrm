import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  background-color: #7370f9;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 15px 50px;

  svg {
    width: 40px;
    height: 40px;
  }
  @media (min-width: 750px) {
    width: 750px;
    
    border-radius: 20px;
   
}
`;
