import React, { createContext, useState } from "react";
import { ContextModel, DefaultValues } from "./models";

export const defaultValues: DefaultValues = {
  display: 0,
  operator: "",
  rowsTextArea: [],
  acc: 0,
};

export const CalculatorContext = createContext<ContextModel>({ totalState: defaultValues, setTotalState: () => {} });

export const CalculatorContextProvider = (props) => {
  const [totalState, setTotalState] = useState(defaultValues);

  return <CalculatorContext.Provider value={{ totalState, setTotalState }}>{props.children}</CalculatorContext.Provider>;
};
