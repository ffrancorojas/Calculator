export interface DefaultValues {
  display: number;
  operator: string;
  rowsTextArea: string[];
  acc: number;
}

export interface ContextModel {
  totalState: DefaultValues;
  setTotalState: (value: DefaultValues) => void;
}
