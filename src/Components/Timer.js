import React, { useEffect, useState } from "react";
import { StyledButton } from "../Style/StyledButton";
import { StyledCyrcle } from "../Style/StyledCyrcle";
import { StyledTimer } from "../Style/StyledTimer";
import { ReactComponent as Close } from "../Assets/close.svg";
import { StyledContent } from "../Style/StyledContent";

export default function Timer({ activeA, newValueA, newValueB, unvisible }) {
  return (
    <StyledTimer>
      <h2>Tlenu wystarczy na:</h2>

      {activeA ? (
        <h1>{newValueA.toFixed(0)} min</h1>
      ) : (
        <h1>{newValueB.toFixed(0)} min</h1>
      )}
      <StyledButton close onClick={unvisible}>
        Zamknij
      </StyledButton>
    </StyledTimer>
  );
}
