import { useReducer, useCallback } from "react";
import { map, find, every, merge } from "lodash/fp";

import { State, Actions, Input, FormInput, UseFromReturn } from "./types";
import { Box } from "../Box";

const reducer = (state: State, action: Actions): State => {
  if (action.type === "UPDATE_VALUE") {
    const { name, value } = action.payload;
    return map(
      (input) => (input.name === name ? { ...input, value } : input),
      state
    );
  }
  return state;
};

const formInputProp = {
  valid: false,
  touched: false,
};

const addFormProp = (input: Input): FormInput => merge(input, formInputProp);

const isInputValid = ({ valid }: FormInput): boolean => valid;

function useForm(inputs: Input[]): UseFromReturn {
  const [state, dispatch] = useReducer(reducer, map(addFormProp, inputs));

  const onInputChangeHandler = useCallback(
    ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: "UPDATE_VALUE", payload: { name, value } }),
    []
  );

  return [
    { inputs: state, valid: every(isInputValid, state) },
    { change: onInputChangeHandler },
  ];
}

export { useForm };
