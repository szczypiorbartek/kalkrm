import React,{useState} from 'react'
import { ButtonAreaStyled } from '../Style/ButtonAreaStyled'
import { StyledAdrenalina} from '../Style/StyledAdrenalina'
import { StyledButton } from '../Style/StyledButton'
import { StyledContent } from '../Style/StyledContent'
import { StyledInput } from '../Style/StyledInput'
import { StyledSelect } from '../Style/StyledSelect'





export default function Adrenalina(props) {


    const [bradyActive, setBradyActive] = useState(true)
    const [shockActive, setShockActie] = useState(false)
    const [checkA, setCheckA] = useState(false)
    const [checkB, setCheckB] = useState(false)
    const [squirrel, setSquirrel] = useState({a:"",
    b:""
})
    const [contentVisble, setContentVisible] = useState(false)
    const [brady, setBardy] = useState()

    const [weightValue, setWeightValue] = useState()
    const [doseValue, setDoseValue] = useState()
   
  
   
    return (
        <StyledAdrenalina>
            <ButtonAreaStyled>
                
             {bradyActive ? <StyledButton primary onClick={()=>setShockActie(false) & setBradyActive(true)} >Bradykardia</StyledButton> :<StyledButton onClick={()=>setShockActie(false) & setBradyActive(true)} >Bradykardia</StyledButton>}
             {shockActive ?  <StyledButton primary onClick={()=>setShockActie(true) & setBradyActive(false)}>Wstrząs</StyledButton>:  <StyledButton onClick={()=>setShockActie(true) & setBradyActive(false)}>Wstrząs</StyledButton>

 }
            
              

            </ButtonAreaStyled>
           {bradyActive ? <p>Dawka Adrenaliny w Bardykardi 2-10 mcg/min</p> : <p> Dawka Adrenaliny we wstrząsie 0.05 - 0.5mcg/kg/min</p>}
          <StyledInput placeholder='Podaj dawkę w mcg'  type="number"  value={doseValue} onChange={(e)=>setDoseValue(e.target.value)}/>
            {shockActive ? <StyledInput placeholder='Podaj wagę w kg' type="number" value={weightValue} onChange={(e)=>setWeightValue(e.target.value)}/> :""}
           
            <ButtonAreaStyled>
                <label>
                <StyledSelect type="checkbox" checked={checkA} value={20} onChange={(e)=> {
                    setSquirrel({a:"20", b:"50"})
                    setCheckA(true)
                    setCheckB(false)
                } } />
                <p>20 ml</p>
                </label>

                <label>
                <StyledSelect type="checkbox" checked={checkB} value={50} onChange={(e)=> {
                    setSquirrel({a:"50", b:"20"})
                    setCheckB(true)
                    setCheckA(false)
                    }}/>
                <p>50 ml</p>
                </label>
            </ButtonAreaStyled>
           
           { props.content ?<div>
            {bradyActive ? <StyledContent>
                 <h1>1 amp adrenaliny rozcieńczyć w {squirrel.a} ml 0.9% NaCl. Ustawić na pompie infuzyjnej przepływ na {(doseValue*60)/squirrel.b} ml/h</h1> 
            </StyledContent> : 
             <StyledContent>
             <h1>1 amp adrenaliny rozcieńczyć w {squirrel.a} ml 0.9% NaCl. Ustawić na pompie przepływ na {((doseValue*weightValue*60)/(squirrel.b)).toFixed(0)} ml/h</h1> 
        </StyledContent>}
            </div> :''}
        
          
          
            
             
            
            
        
          </StyledAdrenalina>
          
              
    )
}
