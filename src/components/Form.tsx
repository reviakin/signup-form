import React, { FC, useReducer } from "react";
import { TextInput } from "./TextInput";
import { Title } from "./Title";
import { map } from "lodash/fp";
import { RadioInput } from "./RadioInput";
import { Box, logIt } from "../tools";

interface ITextInput {
  readonly type: "text" | "password" | "email";
  readonly placeholder: string;
  readonly name: string;
  value: string;
}

interface IRadioInput {
  readonly name: string;
  readonly options: string[];
  readonly type: "radio";
  value: null | string;
}

type Input = IRadioInput | ITextInput;

type State = Input[];

type UpdateValueAction = {
  type: "UPDATE_VALUE";
  payload: {
    name: string;
    value: string;
  };
};

type Actions = UpdateValueAction;

const initState: State = [
  { type: "text", placeholder: "name", value: "", name: "name" },
  { type: "email", placeholder: "email", value: "", name: "email" },
  {
    type: "password",
    placeholder: "password",
    value: "",
    name: "password",
  },
  {
    type: "radio",
    name: "gender",
    options: ["male", "female"],
    value: null,
  },
];

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

type Props = {};

const Form: FC<Props> = (props) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const onTextInputChangeHandler = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) =>
    Box({ name, value })
      .map(logIt)
      .fold((payload) => dispatch({ type: "UPDATE_VALUE", payload }));

  return (
    <div
      style={{
        width: 400,
        height: 605,
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
      }}
    >
      <Title text="Create a new account" />
      <form action="" method="post">
        {map(
          (input) =>
            input.type !== "radio" ? (
              <div key={input.type}>
                <TextInput
                  type={input.type}
                  placeholder={input.placeholder}
                  changeHandler={onTextInputChangeHandler}
                  name={input.name}
                  value={input.value}
                />
              </div>
            ) : (
              <RadioInput
                key={input.type}
                name={input.name}
                options={input.options}
                value={input.value}
                onChange={onTextInputChangeHandler}
              />
            ),
          state
        )}
        <div>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">accept terms and conditions</label>
        </div>
        <div>
          <button type="button">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export { Form };
