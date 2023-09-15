import { css } from "@emotion/css";
export const mainCalculator = css`
  width: 28rem;
`;

export const calculatorStyles = css`
  display: flex;
  justify-content: space-between;
`;

export const display = css`
  background-color: rgb(192 192 192 / 45%);
  border: 1px solid black;
  border-radius: 4px;
  box-sizing: border-box;
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    font-size: 1rem;
    font-weight: bold;
    padding-right: 0.4rem;
  }
`;

export const operatorButtons = css`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  & > button {
    min-width: 0rem;
    color: black;
    width: 2rem;
    background-color: darkcyan;
    border-radius: 50px;
    margin: 0.3rem 0.5rem;
  }
`;
export const buttonsPanel = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 50px 50px 50px 50px;
  justify-items: center;
  & > button {
    min-width: 0rem;
    background-color: bisque;
    border-radius: 50px;
    width: 3rem;
    margin: 0.3rem 0;
  }
`;

export const textArea = css`
  background-color: rgb(192 192 192 / 45%);
  border-radius: 4px;
`;
