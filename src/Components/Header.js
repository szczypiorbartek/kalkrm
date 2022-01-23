import React from 'react'
import { StyledHeader } from '../Style/StyleHeader'
import {ReactComponent as Home} from '../Assets/Home.svg'
import { StyledCyrcle } from '../Style/StyledCyrcle'
import {ReactComponent as Zero} from '../Assets/zero.svg'
export default function Header(props) {
    return (
       <StyledHeader>
           <Home  onClick={props.back}/>
           <StyledCyrcle onClick={props.visibleCont}>
               <p>
                   =
               </p>
           </StyledCyrcle>
        <Zero onClick={props.clearContent}/>
       </StyledHeader>
    )
}
