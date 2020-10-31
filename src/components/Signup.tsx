import React, { FC } from "react";
import { Background } from "./Background";
import { Form } from "./Form";
import { Title } from "./Title";
import { signUpInputs } from "../data";
import {} from "module";
import { gql, useMutation } from "@apollo/client";
import { Box, logIt } from "../tools";

const SIGN_UP = gql`
  mutation Signup($input: SignupInput!) {
    newUser: signup(input: $input) {
      id
      name
      email
      country
      gender
    }
  }
`;

const bgdColor = "#102250";

type Props = {};

const Signup: FC<Props> = () => {
  const [signUp, { loading }] = useMutation(SIGN_UP);
  const onSubmit = (input: any) =>
    Box(input)
      .map(logIt)
      .fold((input) => {
        try {
          signUp({
            variables: {
              input: {
                ...input,
                country: "as",
                gender: "MALE",
              },
            },
          });
        } catch (error) {
          console.log(error);
        }
      });

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
        <Form submit={onSubmit} inputs={signUpInputs} loading={loading} />
      </div>
    </div>
  );
};

export { Signup };
