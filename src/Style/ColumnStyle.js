import React from "react";
import styled from "styled-components";

export const ColumnStyle = styled.div`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (min-width:449px) {
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
`