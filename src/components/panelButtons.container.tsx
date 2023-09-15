import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import * as classes from "../style/styles";
import { defaultValues } from "../provider";
import { useSetter } from "../hook/useSetter";

export const PanelButtonsContainer: React.FC = () => {
  const elements = ["9", "8", "7", "6", "5", "4", "3", "2", "1", ".", "0", "AC"];
  const operators = ["+", "-", "*", "/", "="];
  const { totalState, display, rowsTextArea, acc, updateState, setDisplay, operator } = useSetter();

  const handleNumbersClick = (e: any) => {
    const numberSelected = Number(display + e.target.innerText);
    // Si no hay valor acc, es decir, no hay valor de inicio, el valor introducido lo toma como acc, lo muestra en display y lo añade a rowTextArea.
    if (!acc && !operator) return updateState({ rowsTextArea: [...rowsTextArea, numberSelected], acc: numberSelected, display: numberSelected });
    const resultOperation =
      operator === "+"
        ? numberSelected + acc
        : operator === "-"
        ? acc - numberSelected
        : operator === "*"
        ? numberSelected * acc
        : operator === "/"
        ? acc / numberSelected
        : numberSelected;
    updateState({
      ...totalState,
      rowsTextArea: [...rowsTextArea, numberSelected],
      operator: operator,
      acc: resultOperation,
      display: numberSelected,
    });
  };

  const handleClickOperator = (e: any) => {
    // Almacenamos el botón tocado en una constate cuando sea distinto a un número
    const buttonClicked = e.target.innerText;
    // Si toca AC reiniciamos los valores
    if (buttonClicked === "AC") return updateState(defaultValues);
    // Asignamos el resultado de la posible operación en una variable
    if (buttonClicked === "=") return updateState({ rowsTextArea: [...rowsTextArea, `= ${acc}`], display: acc });
    updateState({ rowsTextArea: [...rowsTextArea, buttonClicked], display: 0, operator: buttonClicked });
  };
  // Another change
  return (
    <>
      <main className={classes.calculatorStyles}>
        <div>
          <div className={classes.display}>
            <span>{display}</span>
            {/* <TextField type="number" id="standard-basic" variant="standard" value={display} onChange={(e) => setDisplay(Number(e.target.value))} /> */}
          </div>
          <div className={classes.operatorButtons}>
            {operators.map((operator, index) => {
              return (
                <Button color="primary" key={index} onClick={handleClickOperator}>
                  {operator}
                </Button>
              );
            })}
          </div>
          <div className={classes.buttonsPanel}>
            {elements.map((element, index) => {
              if (element !== "AC") {
                return (
                  <Button color="primary" key={index} onClick={handleNumbersClick}>
                    {element}
                  </Button>
                );
              } else {
                return (
                  <Button color="primary" key={index} onClick={handleClickOperator}>
                    {element}
                  </Button>
                );
              }
            })}
          </div>
        </div>
        <div>
          <textarea className={classes.textArea} name="operations" id="operations" cols={20} rows={20} readOnly={true} defaultValue={rowsTextArea.join("\n")}></textarea>
        </div>
      </main>
    </>
  );
};
