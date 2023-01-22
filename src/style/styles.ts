import { css } from "@emotion/css";
export const mainCalculator = css`
  width: 25rem;
`;

export const calculatorStyles = css`
  display: flex;
  justify-content: space-around;
`;

export const display = css`
  box-sizing: border-box;
  width: 100%;
  height: 2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  input {
    text-align: right;
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

export const textArea = css``;
