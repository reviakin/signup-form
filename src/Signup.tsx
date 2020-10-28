import React, { FC } from "react";
import { Background } from "./Background";
import { Form } from "./Form";

const bgdColor = "#102250";

type Props = {};

const Signup: FC<Props> = (props) => (
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
    <Form />
  </div>
);

export { Signup };
