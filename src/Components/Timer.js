import React, { useEffect, useState } from "react";
import { StyledButton } from "../Style/StyledButton";
import { StyledCyrcle } from "../Style/StyledCyrcle";
import { StyledTimer } from "../Style/StyledTimer";

export default function Timer({ activeA, newValueA, newValueB }) {

  return (
  
 
   <StyledTimer>
     <h2>Tlenu starczy na:</h2>
      {activeA ? (
        
        <h1>{newValueA.toFixed(0)} min</h1>
      ) : (
        <h1>{newValueB.toFixed(0)} min</h1>
      )}
    </StyledTimer>
    
  
   
    
 
   
    
   

  );
}
