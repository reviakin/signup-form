import React, { FC } from "react";
import { TextInput } from "./TextInput";
import { Title } from "./Title";
import { map } from "lodash/fp";
import { RadioInput } from "./RadioInput";
import { useForm } from "../tools";

type Props = {};

const Form: FC<Props> = (props) => {
  const [state, { change }] = useForm();

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
                  changeHandler={change}
                  name={input.name}
                  value={input.value}
                  required={input.validation.required}
                  minLength={input.validation.minLength}
                  pattern={input.validation.pattern}
                />
              </div>
            ) : (
              <RadioInput
                key={input.type}
                name={input.name}
                options={input.options}
                value={input.value}
                onChange={change}
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
