import { useReducer, useCallback } from "react";

import { map, find } from "lodash/fp";

import { State, Actions } from "./types";

const initState: State = {
  inputs: [
    {
      type: "text",
      placeholder: "name",
      value: "",
      name: "name",
      validation: {
        pattern: "[a-zA-Z]+",
        required: true,
      },
    },
    {
      type: "email",
      placeholder: "email",
      value: "",
      name: "email",
      validation: {
        pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
        required: true,
      },
    },
    {
      type: "password",
      placeholder: "password",
      value: "",
      name: "password",
      validation: {
        pattern: "",
        required: true,
        minLength: 6,
      },
    },
    {
      type: "radio",
      name: "gender",
      options: ["male", "female"],
      value: null,
    },
  ],
};

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

function useForm(): [
  State,
  { change: (event: React.ChangeEvent<HTMLInputElement>) => void }
] {
  const [state, dispatch] = useReducer(reducer, initState);

  const onInputChangeHandler = useCallback(
    ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) =>
      dispatch({ type: "UPDATE_VALUE", payload: { name, value } }),
    []
  );

  return [state, { change: onInputChangeHandler }];
}

export { useForm };
