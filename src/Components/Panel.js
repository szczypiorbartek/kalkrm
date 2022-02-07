import React from "react";
import { StyledPanel } from "../Style/StyledPanel";
import PanelItem from "./PanelItem";
import adrenalina from "../Assets/adrenalina.svg";
import oxy from "../Assets/oxy.svg";
import child from "../Assets/child.svg";
import fire from "../Assets/fire.svg";

export default function Panel(props) {
  return (
    <StyledPanel>
      <PanelItem
        open={props.openAdrenalina}
        icon={adrenalina}
        name={"Adrenalina w pompie"}
      />
      <PanelItem open={props.openOxygen} icon={oxy} name={"Ile tlenu ?"} />
      <PanelItem icon={child} name={"Dawki dla dzieci"} open={props.openChildDrug} />
      <PanelItem icon={fire} name={"Oparzenia"} />
    </StyledPanel>
  );
}
