import React from "react";
import styled,{css}from "styled-components";

export const StyledDrugItem = styled.div`
position: relative;
    width:80%;
    padding: 10px;
    margin: 5px;
    border-radius:18px;
    background: white;
    display: flex;
    justify-content:center;
    align-items: center;
    font-size:1.8em;

    ${props =>
    props.full &&
    css`
    position: fixed;
      border-radius:0px;
     
     width: 100vw;
    height: 100vh;
     z-index: 9999;
     margin: 0;
      background-color: #F2F2F2;
     display: flex;
     flex-direction:column;
     justify-content: space-around;
     h1{
       font-size: 1em;
     }
   
    `};
    ${props =>
    props.yellow &&
    css`
      background:#DDA448;
      color: white;
    `};
    ${props =>
    props.red &&
    css`
     background: #BB342F;
      color: white;
    `};
    ${props =>
    props.blue &&
    css`
     background:#1985A1;
      color: white;
    `};
    ${props =>
    props.grey &&
    css`
     background:#503D42;
      color: white;
    `};

    ${props =>
    props.green &&
    css`
     background:#00CC66;
      color: white;
    `};

    ${props =>
    props.purple &&
    css`
     background:#2C0E37;
      color: white;
    `};
    ${props =>
    props.pink &&
    css`
     background:#FF5A5F;
      color: white;
    `};
    ${props =>
    props.electricBlue &&
    css`
     background:#496A81;
      color: white;
    `};
    ${props =>
    props.olive &&
    css`
     background:#58641D;
      color: white;
    `};
    ${props =>
    props.forest &&
    css`
     background:#499F68;
      color: white;
    `};

    

    `