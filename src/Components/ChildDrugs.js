import React, { useState,useEffect } from "react";
import { ButtonAreaStyled } from "../Style/ButtonAreaStyled";
import { CheckStyled } from "../Style/CheckStyled";
import { StyledButton } from "../Style/StyledButton";
import { StyledDrugArea } from "../Style/StyledDrugArea";
import { StyledDrugItem } from "../Style/StyledDrugItem";
import { StyledInput } from "../Style/StyledInput";
import { StyledItemWrapper } from "../Style/StyledItemWrapper";
import { StyledRowInput } from "../Style/StyledRowInput";

export default function ChildDrugs() {
  const [weightMode, setWeightMode] = useState(true);
  const [ageMode, setAgeMode] = useState(false);

  const [adrenalinaOpen, setAdrenalinaOpen] = useState(false);
  const [atropinaOpen, setAtropinaOpen] = useState(false);
  const [amiodaronOpen, setAmiodaronOpen] = useState(false);

  const [weighValue, setWeightValue] = useState('');
  const [ageValue, setAgeValue] = useState('')
  const [adrenalinaA, setAdrenalinaA] = useState(true);
  const [adrenalinaB, setAdrenalinaB] = useState(false);
  const [adrenalinaC, setAdrenalinaC] = useState(false);
  const [adrenalinaD, setAdrenalinaD] = useState(false);

  const [final,setFinal] = useState('')

  useEffect(() => {
  setFinal((parseInt(ageValue)*3)+7)
  });

  const changeWeightMode = (e) => {
    setWeightMode(true);
    setAgeMode(false);
    setWeightValue('');
    setAgeValue('');
  };
  const changeAgeMode = (e) => {
    setWeightMode(false);
    setAgeMode(true);
    setWeightValue('');
    setAgeValue('');
  };

  const openAdrenalina = () => {
    setAdrenalinaOpen(true);
  };
  const openAtropina = () => {
    setAtropinaOpen(true);
  };
  const openAmiodaron = () => {
    setAmiodaronOpen(true);
  };
  const changeAdrenalinaA = () => {
    setAdrenalinaA(true);
    setAdrenalinaB(false);
    setAdrenalinaC(false);
    setAdrenalinaD(false);
  };

  const changeAdrenalinaB = () => {
    setAdrenalinaA(false);
    setAdrenalinaB(true);
    setAdrenalinaC(false);
    setAdrenalinaD(false);
  };
  const changeAdrenalinaC = () => {
    setAdrenalinaA(false);
    setAdrenalinaB(false);
    setAdrenalinaC(true);
    setAdrenalinaD(false);
  };
  const changeAdrenalinaD = () => {
    setAdrenalinaA(false);
    setAdrenalinaB(false);
    setAdrenalinaC(false);
    setAdrenalinaD(true);
  };

  return (
    <StyledItemWrapper>
      <h1>Dawki leków dla dzieci</h1>
      <ButtonAreaStyled>
        {weightMode ? (
          <StyledButton primary onClick={changeWeightMode}>
            Waga
          </StyledButton>
        ) : (
          <StyledButton onClick={changeWeightMode}>Waga</StyledButton>
        )}
        {ageMode ? (
          <StyledButton primary onClick={changeAgeMode}>
            Wiek
          </StyledButton>
        ) : (
          <StyledButton onClick={changeAgeMode}>Wiek</StyledButton>
        )}
      </ButtonAreaStyled>
      {weightMode ? (
        <StyledInput
        value={weighValue}
          placeholder="waga dziecka"
          onChange={(e) => setWeightValue(e.target.value)}
        />
      ) : (
        <StyledInput type="number" value={ageValue} placeholder="wiek dziecka w latach" onChange={(e) => setAgeValue(e.target.value)} />
      )}

      <StyledDrugItem yellow onClick={openAdrenalina}>
        Adrenalina
      </StyledDrugItem>
      {adrenalinaOpen ? (
        <StyledDrugItem full>
          <ButtonAreaStyled>
            {adrenalinaA ? (
              <StyledButton primary onClick={changeAdrenalinaA}>
                NZK
              </StyledButton>
            ) : (
              <StyledButton onClick={changeAdrenalinaA}>NZK</StyledButton>
            )}
            {adrenalinaB ? (
              <StyledButton primary onClick={changeAdrenalinaB}>
                Anafilaksja
              </StyledButton>
            ) : (
              <StyledButton onClick={changeAdrenalinaB}>
                Anafilaksja
              </StyledButton>
            )}
            {adrenalinaC ? (
              <StyledButton primary onClick={changeAdrenalinaC}>
                Zapalenie krtani
              </StyledButton>
            ) : (
              <StyledButton onClick={changeAdrenalinaC}>
                Zapalenie krtani
              </StyledButton>
            )}
            {adrenalinaD ? (
              <StyledButton primary onClick={changeAdrenalinaD}>
                Astma
              </StyledButton>
            ) : (
              <StyledButton onClick={changeAdrenalinaD}>Astma</StyledButton>
            )}
          </ButtonAreaStyled>
{ weighValue || ageValue >0 ?
          <StyledDrugArea>
            {adrenalinaA ? (
              <>
                <h1>Zatrzymanie krążenia</h1>
                <p>Dawka: {weightMode ? (weighValue * 0.01) :  final*0.01} mg</p>
                <p>
                  1 mg Adrenaliny rozcieńcz w 10 ml 0.9% NaCl. Podaj{" "}
                  {weightMode? (weighValue / 10) : final/10 } ml roztworu iv/io
                </p>
              </>
            ) : (
              " "
            )}
            {adrenalinaB ? (
              <>
                <h1>Anafilaksja</h1>
                {ageMode ? <p>
                 Dawka: {ageValue<=6 ? 150 : ageValue>6 && ageValue<12 ? 300 : 500} mcg
                </p>:<p>Podaj wiek dziecka by wyliczyć dawkę</p>}
              </>
            ) : (
              " "
            )}

            {adrenalinaC ? (
              <>
                <h1>Zapalenie krtani</h1>
                <p>
                  {" "}
                  W nebulizacj podaj 1 mg Adrenaliny. Jeśli brak efektu można
                  powtarzać do całkowitej dawki 5 mg.
                </p>
              </>
            ) : (
              " "
            )}
            {adrenalinaD ? (
              <>
                <h1>Astma</h1>
                <p>
                  Dawka {weightMode ? weighValue*0.01 : final*0.01} mg im. Można powtórzyć po 20 min.
                  <p>1 mg adrenaliny rozcieńcz w 10 ml 0.9% NaCl i podaj {weightMode ? weighValue/10 : final/10} ml</p>
                </p>
              </>
            ) : (
              " "
            )}
          </StyledDrugArea> : <h1>Wpisz wagę albo wiek diecka</h1>
}
          <StyledButton close onClick={() => setAdrenalinaOpen(false)}>
            Close
          </StyledButton>
        </StyledDrugItem>
      ) : (
        ""
      )}
      <StyledDrugItem blue onClick={openAtropina}>
        Atropina
      </StyledDrugItem>
      {atropinaOpen ? (
        <StyledDrugItem full>
            <StyledDrugArea>
                <h1>Atropina w bradykardi</h1>
                <p>Dawka: {weightMode ? (weighValue*0.02)<=0.1 ? 0.1 :(final*0.02) : (final*0.02)<=0.1 ? 0.1 :(final*0.02) } mg</p>
                <p>2 mg atropiny rozcieńcz w 10 mg 0.9% NaCl podaj {weightMode? weighValue/10 : final/10} ml</p>
            </StyledDrugArea>
          <StyledButton close onClick={() => setAtropinaOpen(false)}>
            Close
          </StyledButton>
        </StyledDrugItem>
      ) : (
        ""
      )}
      <StyledDrugItem red onClick={openAmiodaron}>
        Amiodaron
      </StyledDrugItem>
      {amiodaronOpen ? (
        <StyledDrugItem full>
            <StyledDrugArea>
                <h1>Amiodaron</h1>
                <p>Dawka: {weightMode ? weighValue*5: final*5} mg. </p>
                <p>Rozcieńcz 100mg w 5% glukozie i podaj {weightMode ? weighValue: final} ml iv/io.</p>
            </StyledDrugArea>
          <StyledButton close onClick={() => setAmiodaronOpen(false)}>
            Close
          </StyledButton>
        </StyledDrugItem>
      ) : (
        ""
      )}
      <StyledDrugItem green>Adenozyna</StyledDrugItem>
      <StyledDrugItem grey>Dexaven</StyledDrugItem>
      <StyledDrugItem purple>Hydrokortyzon</StyledDrugItem>
      <StyledDrugItem pink>Morfina</StyledDrugItem>
      <StyledDrugItem electricBlue>Fentanyl</StyledDrugItem>
      <StyledDrugItem olive>Ketamina</StyledDrugItem>
      <StyledDrugItem forest>Midanium</StyledDrugItem>
    </StyledItemWrapper>
  );
}
