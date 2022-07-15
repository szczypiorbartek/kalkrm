import { useState } from "react/cjs/react.development";
import Wrapper from "./Components/Wrapper";
import {GlobalStyle} from './GlobalStyle'
import Heading  from "./Heading";
import { StyledWrapper } from "./Style/StyleWrapper";
import './App.css';
import Header from "./Components/Header";
import Theme from "./Theme/Theme";





function App() {

 
  return (

  <div className="App">
    <Theme>
    <GlobalStyle/>
  
       <Wrapper/>
    </Theme>
  
      
  </div>
  );
}

export default App;
