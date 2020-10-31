import { useReducer, useCallback } from "react";

import { map } from "lodash/fp";

import { State, Actions, Input } from "./types";

const reducer = (state: State, action: Actions): State => {
  if (action.type === "UPDATE_VALUE") {
    const { name, value } = action.payload;
    return {
      ...state,
      inputs: map(
        (input) => (input.name === name ? { ...input, value } : input),
        state.inputs
      ),
    };
  }
  return state;
};

function useForm(
  inputs: Input[]
): [State, { change: (event: React.ChangeEvent<HTMLInputElement>) => void }] {
  const [state, dispatch] = useReducer(reducer, { inputs, isValid: false });

  const onInputChangeHandler = useCallback(
    ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: "UPDATE_VALUE", payload: { name, value } }),
    []
  );

  return [state, { change: onInputChangeHandler }];
}

export { useForm };
