import React from "react";
import styled from "styled-components";

export const StyledItemWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #d8d8d8;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 1.3em;
  }
  p {
    font-size: 1em;
    margin: 10px 0;
  }
  label {
    position: relative;
    width: 95%;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
  }

  @media (min-width: 450px) {
    h1 {
      font-size: 1.1em;
    }
    p {
      margin: 5px 0px;
    }

    label {
      flex-direction: row;
      position: relative;
      width: 95%;
      height: 60px;
      display: flex;
      justify-content: center;
      margin: 0;
    }
  }
`;
