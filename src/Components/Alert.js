import React from 'react';
import styled from 'styled-components';

const Wrap = styled.div`
width: 80vw;
height: 25vh;
margin-top: 12vh;
background-color: red;
opacity: .9;
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 20px;
z-index: 999;
box-shadow: rgba(0, 0, 0, 0.70) 0px 7px 17px;
animation: open  0.3s ease-in-out;
color: white;
h1{
    color: white;
    margin-bottom: 5vh;
}


@keyframes open {
  0% { 
      opacity:0
    }
  100% { 
    opacity:1;
  }

}


`
const CloseButton = styled.button`
width: 30vw;
height: 5vh;
font-size: 1.2em;
`
export default  function (props)  {
 return(
 <Wrap>
    <h1>Uzupełnij pola</h1>
    <CloseButton onClick={props.close}>Zamknij</CloseButton>
    </Wrap>
    )
      
}


