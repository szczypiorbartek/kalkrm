import React,{useState} from 'react'
import { ButtonAreaStyled } from '../Style/ButtonAreaStyled'
import {StyledItemWrapper } from '../Style/StyledItemWrapper'
import { StyledButton } from '../Style/StyledButton'
import { StyledInput } from '../Style/StyledInput'
import { StyledCyrcle } from '../Style/StyledCyrcle'





export default function Oxygen(props) {
    const [valueA, setValueA] = useState()
    const [valueB, setValueB] = useState()
    const [valueC, setValueC] = useState()
   
    
return(

            <StyledItemWrapper>
                
              <ButtonAreaStyled>
                  <StyledButton>
                      Tlenoterapia Bierna
                  </StyledButton>
                  <StyledButton>
                      Respirator
                  </StyledButton>
              </ButtonAreaStyled>

              <StyledInput placeholder='ciśnienie w butli bar/atm' onChange={(e)=>setValueA(e.target.value)}/>
              <StyledInput placeholder='przepływ tlenu'onChange={(e)=>setValueB(e.target.value)}/>
              <StyledInput placeholder='pojemność butli' onChange={(e)=>setValueC(e.target.value)}/>
           
            {
               
                    valueA>0 & valueB>0& valueC>0 & props.content ?
                    <>
                    {
                       (valueA*valueC)/valueB>=60? <StyledCyrcle timeCircleLast>{((valueA*valueC)/valueB).toFixed(0)} min</StyledCyrcle> : 
                        
                       (valueA*valueC)/valueB <=60 && (valueA*valueC)/valueB >=30 ? <StyledCyrcle timeCircleSec>{((valueA*valueC)/valueB).toFixed(0)} min</StyledCyrcle> : <StyledCyrcle timeCircleFirst>{((valueA*valueC)/valueB).toFixed(0)} min</StyledCyrcle>

                    }
                    
                    </>
                    
                    :''
                    
                   
                
            }
            
           
              
    
            </StyledItemWrapper>
          
              
    )
}
