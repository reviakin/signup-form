import React, { FC } from "react";
import { gql, useMutation } from "@apollo/client";
import { pick } from "lodash/fp";

import { Background } from "../../components/Background";
import { Form } from "../../components/Form";
import { Title } from "../../components/Title";

import { Box } from "../../tools";
import { signUpInputs } from "../../data";
import "./style.css";

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

const Signup: FC<Props> = () => {
  const [signupMutation, { loading, error }] = useMutation(SIGN_UP);

  const signup = (input: SignupInput) =>
    signupMutation({ variables: { input } }).catch(console.log);

  const onSubmit = (input: any) =>
    Box(input)
      .map(pick(["name", "email", "password", "country", "gender"]))
      .fold((input: any) =>
        isValidSignupInput(input)
          ? signup(input)
          : console.log("invalid signup input")
      );

  if (error) {
    console.log(error);
  }

  return (
    <div className="signup__wrapper">
      <Background color={bgdColor} />
      <div className="signup__form-wrapper">
        <div style={{ margin: "32px 56px" }}>
          <Title text="Create a new account" classname="signup__title" />
        </div>
        <Form submit={onSubmit} inputs={signUpInputs} loading={loading} />
      </div>
    </div>
  );
};

export { Signup };
