import React, { useEffect, useState } from "react";
import { StyledButton } from "../Style/StyledButton";
import { StyledCyrcle } from "../Style/StyledCyrcle";
import { StyledTimer } from "../Style/StyledTimer";

export default function Timer({ activeA, newValueA, newValueB }) {
  return (
    <StyledTimer>
      {activeA ? (
        <h1>{newValueA.toFixed(2)} h</h1>
      ) : (
        <h1>{newValueB.toFixed(2)} h</h1>
      )}
    </StyledTimer>
  );
}
