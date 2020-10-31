import React, { FC } from "react";
import { State } from "../tools/hooks/types";
import { Background } from "./Background";
import { Form } from "./Form";
import { Title } from "./Title";

const bgdColor = "#102250";

type Props = {};

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
        <Form submit={onSubmit} />
      </div>
    </div>
  );
};

export { Signup };
