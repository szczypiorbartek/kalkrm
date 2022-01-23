import React,{useState} from 'react'
import { ButtonAreaStyled } from '../Style/ButtonAreaStyled'
import { StyledAdrenalina } from '../Style/StyledAdrenalina'
import { StyledButton } from '../Style/StyledButton'





export default function Oxygen(props) {
return(

            <StyledAdrenalina>
                <h1>Rodzej tlenoterapii</h1>
              <ButtonAreaStyled>
                  <StyledButton>
                      Bierna
                  </StyledButton>
                  <StyledButton>
                      Respirator
                  </StyledButton>
              </ButtonAreaStyled>
            </StyledAdrenalina>
          
              
    )
}
