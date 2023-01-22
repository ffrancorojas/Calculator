import React from "react";
import { PanelButtonsContainer } from "./components/panelButtons.container";

import * as classes from "./style/styles";
import { CalculatorContextProvider } from "./provider";

export const App: React.FC = () => {
  return (
    <CalculatorContextProvider>
      <div className={classes.mainCalculator}>
        <h2>We present our new and Brilliant CALCULATOR</h2>
        <PanelButtonsContainer />
      </div>
    </CalculatorContextProvider>
  );
};
