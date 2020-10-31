import React, { FC } from "react";
import { Background } from "./Background";
import { Form } from "./Form";
import { Title } from "./Title";
import { signUpInputs } from "../data";
import { gql, useMutation } from "@apollo/client";
import { Box, Right, Left } from "../tools";

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

enum Gender {
  MALE,
  FEMALE,
}

type SignupInput = {
  name: string;
  password: string;
  email: string;
  country: string;
  gender: Gender;
};

const isValidSignupInput = (input: any): input is SignupInput =>
  input != null &&
  typeof input.name === "string" &&
  typeof input.email === "string" &&
  typeof input.password === "string" &&
  typeof input.country === "string" &&
  typeof input.gender === "string" &&
  ["MALE", "FEMALE"].includes(input.gender);

const checkInput = (input: any) =>
  isValidSignupInput(input) ? Right(input) : Left(input);

const Signup: FC<Props> = () => {
  const [signupMutation, { loading }] = useMutation(SIGN_UP);

  const signup = (input: SignupInput) =>
    signupMutation({ variables: { input } });

  const onSubmit = (input: any) =>
    Box(input).fold((input) =>
      isValidSignupInput(input)
        ? signup(input)
        : console.log("invalid signup input")
    );
  // checkInput(input).fold(
  //   (input) => console.log(`invalid input ${input}`),
  //   signup
  // )

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
