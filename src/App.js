import { useState } from "react/cjs/react.development";
import Wrapper from "./Components/Wrapper";
import {GlobalStyle} from './GlobalStyle'
import Heading  from "./Heading";
import { StyledWrapper } from "./Style/StyleWrapper";
import './App.css';





function App() {

 
  return (

  <div className="App">
  <GlobalStyle/>
       <Wrapper/>
  </div>
  );
}

export default App;
