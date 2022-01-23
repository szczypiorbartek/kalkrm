import React from 'react'
import { StyledPanel } from '../Style/StyledPanel'
import PanelItem from './PanelItem'
import adrenalina from '../Assets/adrenalina.svg';
import oxy from '../Assets/oxy.svg';
import child from '../Assets/child.svg';
import fire from '../Assets/fire.svg'


export default function Panel(props) {
    return (
        
          <StyledPanel>
              
             <PanelItem open={props.openAdrenalina} icon={adrenalina}/>
             <PanelItem open={props.openOxygen} icon={oxy}/>
             <PanelItem icon={child}/>
             <PanelItem icon={fire}/>

          </StyledPanel>
          
              
    )
}
