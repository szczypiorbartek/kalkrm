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
  const [modalVisible, setMoalVisible] = useState(false);

  const [visibleAdrenalina, setVisibleAdrenalina] = useState(false);
  const [visibleOxygen, setVisibleOxygen] = useState(false);

  const Home = () => {
    setVisiblePanel(true);
    setVisibleAdrenalina(false);
    setVisibleOxygen(false);
    setContentVisible(false)
    setTitle("Co Liczymy ?");
  };
  const AdrenalinaOpen = (e) => {
   
    setVisibleAdrenalina(!visibleAdrenalina);
    setTitle("Adrenalina w pompie");
    setVisiblePanel(!visiblePanel);
    e.prventDefault();

  };
  const OxygenOpen = () => {
    setVisibleOxygen(!visibleOxygen);
    setTitle("Ilość tlenu");
    setVisiblePanel(!visiblePanel);
  };

  const chageVisible = () => {
   
    setContentVisible(!contentVisble);
    
  };

  return (
    <StyledWrapper>

      {visiblePanel ? (
        <Panel openAdrenalina={AdrenalinaOpen} openOxygen={OxygenOpen} />
      ) : (
        <Modal
          visibleAdrenalina={visibleAdrenalina}
          visibleOxygen={visibleOxygen}
          contentVisible={contentVisble}
        />
      )}

      <Header back={Home} visibleCont={chageVisible} />
    </StyledWrapper>
  );
}
