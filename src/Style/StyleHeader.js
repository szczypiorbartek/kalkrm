import React from "react";
import styled from "styled-components";

export const StyledHeader = styled.div`
  position: fixed;
  width: 100vw;
  height: auto;
  bottom: 0;
  background-color: #7370f9;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  color: white;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  padding: 10px 0px;

  svg {
    width: 30px;
    height: 30px;
  }
 
`;
