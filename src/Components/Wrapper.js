import React,{useState} from 'react'
import { StyledWrapper } from "../Style/StyleWrapper";
import Header from './Header';
import Panel from './Panel';
import Adrenalina from './Adrenalina';
import { useEffect } from 'react/cjs/react.development';




export default function Wrapper(props) {
    const [visiblePanel, setVisiblePanel] = useState(true)
    const [visibleAdrenalina, setVisibleAdrenalina] = useState(false)
    const [title, setTitle] = useState("Co liczymy ?")
    const [contentVisble, setContentVisible] = useState(false)
    
  



    const Home= () => {
        setVisiblePanel(true)
        setVisibleAdrenalina(false)
        setTitle("Co Liczymy ?")
    }
    const VisibleB= () => {
        setVisibleAdrenalina(!visibleAdrenalina)
        setTitle("Adrenalina w pompie")
        setVisiblePanel(!visiblePanel)
    }
    const chageVisible = () =>{
        setContentVisible(true)
    }





 
    return (

       <StyledWrapper >
          <h1>{title}</h1> 
         {visiblePanel ? 
         <Panel visible={VisibleB} />:''}

         {visibleAdrenalina ?
          <Adrenalina content={contentVisble} /> :''}

         <Header back={Home} 
         visibleCont={chageVisible} />
       </StyledWrapper>
    )
}




