import React, { FC, useState } from "react";
import { compose, map, merge, reduce } from "lodash/fp";

import { Loader } from "./Loader";
import { Button } from "./Button";
import { Inputs } from "./Inputs";

import { Input } from "../tools/hooks/types";
import { Box, useForm } from "../tools";

type Props = {
  submit: (a: any) => void;
  inputs: Input[];
  loading: boolean;
};

const Form: FC<Props> = ({ submit, inputs, loading }) => {
  const [state, { change }] = useForm(inputs);

  const setNameValue = ({ name, value }: { name: string; value: any }) => ({
    [name]: value,
  });

  const prepare = (input: Input[]) =>
    compose(reduce(merge, {}), map(setNameValue))(input);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    compose(
      () => Box(state.inputs).map(prepare).fold(submit),
      (event: React.FormEvent<HTMLFormElement>) => event.preventDefault()
    )(event);

  return (
    <form
      onSubmit={onSubmit}
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "53px",
      }}
    >
      <Inputs inputs={state.inputs} change={change} />
      {loading ? (
        <Loader />
      ) : (
        <Button
          label="Signup"
          disabled={!state.valid}
          style={{
            width: "85%",
            height: "62px",
            marginTop: "20px",
          }}
          type="rounded"
        />
      )}
    </form>
  );
};

export { Form };
