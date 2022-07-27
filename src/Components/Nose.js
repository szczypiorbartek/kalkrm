import react, { useState } from "react";
import styled,{css} from "styled-components";
import { StyledItemWrapper } from "../Style/StyledItemWrapper";

const Wrapper = styled.div`
position: relative;
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
`

const StyledInput = styled.input`
padding: 15px 10px;
font-size: 16px;
text-align: center;
outline: none;
border:none;
border-radius: 15px;
box-shadow: rgba(0, 0, 0, 0.20) 0px 5px 15px;
color:#3E3E3E;
background-color: #F2F2F2;
`
const InputWrapper = styled.div`

display: flex;
justify-content: center;
align-items: center;
left: auto;
width: 100%;
height: 15vh;

`
const DrugsWrapper = styled.div`
padding: 40px 0;
width: 100%;
height: 100vh;
display: grid;
grid-template-rows: 1fr 1fr 1fr;
grid-gap: 10px;
/* background-color: red; */
`

const Drug =styled.div`
display: flex;
align-items: center;
justify-content: center;
text-align: center;
flex-direction: column;
padding: 0 5px;





h1{
    font-size: 1.5rem;
    color:  ${(props)=>props.theme.colors.powderWhite};
   
}

&:nth-of-type(1){
  
  background-color: ${(props)=>props.theme.colors.medBlue};
  
} 
&:nth-of-type(2){
  
  background-color: ${(props)=>props.theme.colors.orange};
  
} 
&:nth-of-type(3){
  
  background-color: ${(props)=>props.theme.colors.darkGreen};
  
} 

${props =>
    props.small &&
    css`
    height: 50vh;
  

    
    `};
   

`

const Nose = () => {
    const [openA, setOpenA]=useState(true)
    const [openB,setOpenB] = useState(true)
    const [openC,setOpenC] = useState(true)
    const [weight ,setWeight] = useState(0)
    return(
       <Wrapper>
        <h1>LEKI DONOSOWO</h1>
            <InputWrapper>
            {/* <StyledInput onChange={(e)=>setWeight(e.target.value)}/> */}
            <input type="range"  min="0" max="50" onChange={(e)=>setWeight(e.target.value)}></input>
            </InputWrapper>
            <p>Waga: {weight} kg </p>
            <DrugsWrapper>
                {openA ? <Drug  onClick={()=>setOpenA(!openA)}> 
                 <h1>Fentanyl</h1>
                <h1>100 mcg/2ml</h1>
                 </Drug>
                 : <Drug small onClick={()=>setOpenA(!openA)}>  
                    <h1>W mililitrach : {(Math.ceil((weight*2)/5)/10).toFixed(2)} ml</h1>
                    <h1>Dawka w mcg : {Math.ceil((weight*2)/5)*5} mcg</h1>
                    </Drug>
                }
                {openB ? <Drug  onClick={()=>setOpenB(!openB)}> 
                 <h1>Midazolam</h1>
                <h1>10 mg/2ml</h1>
                 </Drug>
                 : <Drug small onClick={()=>setOpenB(!openB)}>  
                    <h1>W mililitrach : {(Math.ceil((weight*2)/5)/10).toFixed(2)} ml</h1>
                    <h1>Dawka w mcg : {(Math.ceil((weight*2)/5)/2)} mg</h1>
                    </Drug>
                }
                   {openC ? <Drug  onClick={()=>setOpenC(!openC)}> 
                 <h1>Ketamina</h1>
                <h1>500 mg/10ml</h1>
                 </Drug>
                 : <Drug small onClick={()=>setOpenC(!openC)}>  
                    <h1>W mililitrach : {(Math.ceil((weight*3)/5)/10).toFixed(2)} ml</h1>
                    <h1>Dawka w mcg : {(Math.ceil((weight*3)/5)*5)} mg</h1>
                    </Drug>
                }
            
                
            </DrugsWrapper>
       </Wrapper>


    )

}

export default Nose