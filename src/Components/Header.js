import React from 'react'
import { StyledHeader } from '../Style/StyleHeader'
import {ReactComponent as Home} from '../Assets/Home.svg'
import { StyledCyrcle } from '../Style/StyledCyrcle'
import {ReactComponent as Menu} from '../Assets/menu.svg'
export default function Header(props) {
    return (props.open ? 
       <StyledHeader  >
           <p onClick={props.openMenu}>Zamknij</p>
           <Home  onClick={props.back}/>
           
        <Menu onClick={props.clearContent}/>
       </StyledHeader>:
        <StyledHeader hide >
       <Menu onClick={props.openMenu}></Menu>
    </StyledHeader>

    )
}
