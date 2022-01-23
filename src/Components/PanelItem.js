import React from 'react'
import { StyledPanel } from '../Style/StyledPanel'
import { StyledPanelItem } from '../Style/StyledPanelItem'


export default function PanelItem(props) {
    return (
       <StyledPanelItem onClick={props.open}>
           <img src={props.icon}></img>
           <p>{props.name}</p>
       </StyledPanelItem>
    )
}
