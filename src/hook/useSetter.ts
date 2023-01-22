import { useContext } from "react";
import { CalculatorContext } from "../provider";

export const useSetter = () => {
  const { totalState, setTotalState } = useContext(CalculatorContext);
  const updateState = (newState: any) => setTotalState({ ...totalState, ...newState });
  const setDisplay = (newState: number) => updateState({ display: newState });
  const setOperator = (newState: string) => updateState({ operator: newState });
  const setRowTextArea = (newState: number) => updateState({ rowsTextArea: newState });
  const setAcc = (newState) => updateState({ acc: newState });

  return {
    totalState,
    display: totalState.display,
    operator: totalState.operator,
    rowsTextArea: totalState.rowsTextArea,
    acc: totalState.acc,

    updateState,
    setDisplay,
    setOperator,
    setRowTextArea,
    setAcc,
  };
};
