import * as React from "react";
let ContextOne = React.createContext();

let initialState = {
  data: {
    category: "",
    monthlyBudget: 100,
    sale: 100,
  },
};

let reducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return {
        ...state,
        data: initialState.data,
      };
    case "update":
      return {
        ...state,
        data: action.data,
      };
    default:
      return { ...state };
  }
};

function ContextOneProvider(props) {
  let [state, dispatch] = React.useReducer(reducer, initialState);
  let value = { state, dispatch };
  return (
    <ContextOne.Provider value={value}>{props.children}</ContextOne.Provider>
  );
}

let ContextOneConsumer = ContextOne.Consumer;
export { ContextOne, ContextOneProvider, ContextOneConsumer };
