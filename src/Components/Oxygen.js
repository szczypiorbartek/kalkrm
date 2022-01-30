import React, { useEffect, useState } from "react";
import { ButtonAreaStyled } from "../Style/ButtonAreaStyled";
import { StyledItemWrapper } from "../Style/StyledItemWrapper";
import { StyledButton } from "../Style/StyledButton";
import { StyledInput } from "../Style/StyledInput";
import { StyledTimer } from "../Style/StyledTimer";
import { StyledSelect } from "../Style/StyledSelect";
import { StyledRowInput } from "../Style/StyledRowInput";
import Timer from "./Timer";
import { StyledCyrcle } from "../Style/StyledCyrcle";
import Alert from "./Alert";

export default function Oxygen(props) {
  const [valueA, setValueA] = useState();
  const [valueB, setValueB] = useState();
  const [valueC, setValueC] = useState();

  const [newValueA, setNewValueA] = useState();
  const [newValueB, setNewValueB] = useState();

  const [valueD, setValueD] = useState();
  const [valueE, setValueE] = useState();

  const [activeButtonA, setActiveButtonA] = useState(true);
  const [activeButtonB, setActiveButtonB] = useState(false);

  const [visibleTimer, setVisibleTimer] = useState(false);
  const [visibleAlert, setVisibleAlert] = useState(false);

  const [fi, setFi] = useState({
    value: 1,
    checked: true,
  });
  const changeVisibleTimer = () => {
    setVisibleTimer(true);
  };
  const unVisibleTimer = () => {
    setVisibleTimer(false);
    setValueA("");
    setValueB("");
    setValueC("");
    setValueD("");
    setValueE("");
  };

  const changeButtonA = () => {
    setActiveButtonA(true);
    setActiveButtonB(false);
    setValueA("");
    setValueB("");
    setValueC("");
    setValueD("");
    setValueE("");
    setVisibleTimer(false)
    setNewValueA(0)
    setNewValueB(0)
  };
  const changeButtonB = () => {
    setActiveButtonA(false);
    setActiveButtonB(true);
    setValueA("");
    setValueB("");
    setValueC("");
    setValueD("");
    setValueE("");
    setVisibleTimer(false)
    setNewValueA(0)
    setNewValueB(0)
  };
  const openAlert = ()=>{
    setVisibleAlert(true)
  }

  useEffect(() => {
    setNewValueA((valueA * valueC) / valueB);
  });
  useEffect(() => {
    setNewValueB(
      (valueA * valueC) / (valueD * (valueE / 1000)) / fi.value
    );
  });

  return (
    <>
    <h1>Tlen</h1>
      {visibleAlert ?
        <Alert close={()=>setVisibleAlert(false)}/> : ''
      }
    <StyledItemWrapper>
    
      
      <ButtonAreaStyled>
        {activeButtonA ? (
          <StyledButton primary onClick={changeButtonA}>
            Tlenoterapia Bierna
          </StyledButton>
        ) : (
          <StyledButton onClick={changeButtonA}>
            Tlenoterapia Bierna
          </StyledButton>
        )}
        {activeButtonB ? (
          <StyledButton
            primary
            onClick={changeButtonB}
          >
            Respirator
          </StyledButton>
        ) : (
          <StyledButton
            onClick={changeButtonB}
          >
            Respirator
          </StyledButton>
        )}
      </ButtonAreaStyled>
      {activeButtonB ? (
        <ButtonAreaStyled small>
          <label>
            <StyledSelect
              type="checkbox"
              checked={fi.checked}
              onChange={() =>
                setFi({
                  value: 1,
                  checked: true,
                })
              }
            />
            <p>FiO2=1</p>
          </label>

          <label>
            <StyledSelect
              type="checkbox"
              checked={!fi.checked}
              onChange={() =>
                setFi({
                  value: 0.5,
                  checked: false,
                })
              }
            />
            <p>FiO2=0.5</p>
          </label>
        </ButtonAreaStyled>
      ) : (
        ""
      )}
      <p>Oddechy</p>

      {activeButtonB ? (
        <StyledRowInput>
          <StyledInput
            xsmall
            value={valueD}
            placeholder="ilość"
            onChange={(e) => setValueD(e.target.value)}
          />
          <StyledInput
            xsmall
            value={valueE}
            placeholder="objętość"
            onChange={(e) => setValueE(e.target.value)}
          />
        </StyledRowInput>
      ) : (
        ""
      )}

      <StyledInput
        small
        type="number"
        value={valueA}
        placeholder="ciśnienie w butli bar/atm"
        onChange={(e) => setValueA(e.target.value)}
      />
      {activeButtonA ? (
        <StyledInput
          small
          value={valueB}
          type="number"
          placeholder="przepływ tlenu"
          onChange={(e) => setValueB(e.target.value)}
        />
      ) : (
        ""
      )}

      <StyledInput
        small
        value={valueC}
        placeholder="pojemność butli"
        onChange={(e) => setValueC(e.target.value)}
      />

      {visibleTimer && newValueA >0 || visibleTimer && newValueB>0 ? (
        <Timer 
          activeA={activeButtonA}
          newValueA={newValueA}
          newValueB={newValueB}
          unvisible={unVisibleTimer}
        />
      ) : (
        ""
      )}

      {visibleTimer ? (
        <StyledCyrcle unvisible onClick={unVisibleTimer}>X</StyledCyrcle>
      ) : (
        <StyledCyrcle onClick={newValueA>0 ? changeVisibleTimer :openAlert}>Licz</StyledCyrcle>
      )}
    </StyledItemWrapper>
    </>
  );
}
