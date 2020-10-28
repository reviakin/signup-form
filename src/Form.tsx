import React, { FC, useState } from "react";
import { TextInput } from "./TextInput";
import { Title } from "./Title";

type Input = {
  type: "text" | "password" | "email";
  placeholder: string;
};

type Props = {};

const Form: FC<Props> = (props) => {
  const [state, setState] = useState<Input[]>([
    { type: "text", placeholder: "name" },
    { type: "email", placeholder: "email" },
    { type: "password", placeholder: "password" },
  ]);

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
        {state.map(({ type, placeholder }) => (
          <div key={type}>
            <TextInput type={type} placeholder={placeholder} />
          </div>
        ))}
        <div>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
        <div>
          <input type="radio" name="" id="" />
          <label>male</label>
          <input type="radio" name="" id="" />
          <label>female</label>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">accept term and conditions</label>
        </div>
        <div>
          <button type="button">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export { Form };
