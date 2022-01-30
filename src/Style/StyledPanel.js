import React from "react";
import styled from "styled-components";

export const StyledPanel = styled.div`
position: relative;
width: 90%;
display: grid;
grid-template-columns: 1fr 1fr;
grid-gap: 25px;

@media (min-width: 750px) {
    width: 700px;
}


`