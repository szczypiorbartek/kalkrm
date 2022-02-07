import React, { useState } from "react";
import { StyledWrapper } from "../Style/StyleWrapper";
import Header from "./Header";
import Panel from "./Panel";
import Adrenalina from "./Adrenalina";

import Modal from "./Modal";

export default function Wrapper(props) {
  const [visiblePanel, setVisiblePanel] = useState(true);

  const [title, setTitle] = useState("CO LICZYMY ?");
  const [contentVisble, setContentVisible] = useState(true);


  const [visibleAdrenalina, setVisibleAdrenalina] = useState(false);
  const [visibleOxygen, setVisibleOxygen] = useState(false);
  const [visibleChildDrug, setVisibleChildDrug] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)

  const Home = () => {
    setVisiblePanel(true);
    setVisibleAdrenalina(false);
    setVisibleOxygen(false);
    setContentVisible(false)
    setVisibleChildDrug(false)
    setTitle("Co Liczymy ?");
    setMenuOpen(false)
  };
  const AdrenalinaOpen = (e) => {
   
    setVisibleAdrenalina(!visibleAdrenalina);
    setTitle("Adrenalina w pompie");
    setVisiblePanel(!visiblePanel);
    

  };
  const OxygenOpen = () => {
    setVisibleOxygen(!visibleOxygen);
    setTitle("Ilość tlenu");
    setVisiblePanel(!visiblePanel);
  };

  const ChildDrugOpen = () => {
    setVisibleChildDrug(!visibleChildDrug)
    setTitle("Leki dla dzieci");
    setVisiblePanel(!visiblePanel);
  };

  const chageVisible = () => {
   
    setContentVisible(!contentVisble);
    
  };
  const openMenu = () =>{
    console.log("open")
  setMenuOpen(!menuOpen)
  }

  return (
    <StyledWrapper>

      {visiblePanel ? (
        <Panel openAdrenalina={AdrenalinaOpen} openOxygen={OxygenOpen} openChildDrug={ChildDrugOpen} />
      ) : (
        <Modal
          visibleAdrenalina={visibleAdrenalina}
          visibleOxygen={visibleOxygen}
          visibleChildDrug={visibleChildDrug}
          contentVisible={contentVisble}
        />
      )}
     

      <Header back={Home} visibleCont={chageVisible} open={menuOpen} openMenu={openMenu}/>
    </StyledWrapper>
  );
}
