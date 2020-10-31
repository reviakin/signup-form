import React, { FC } from "react";
import { State } from "../tools/hooks/types";
import { Background } from "./Background";
import { Form } from "./Form";
import { Title } from "./Title";
import { Input } from "../tools/hooks/types";

const bgdColor = "#102250";

type Props = {};

const inputs: Input[] = [
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
    type: "text",
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
];

const Signup: FC<Props> = (props) => {
  const onSubmit = (state: State) => console.log(state);

  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Background color={bgdColor} />
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
        <Form submit={onSubmit} inputs={inputs} />
      </div>
    </div>
  );
};

export { Signup };
