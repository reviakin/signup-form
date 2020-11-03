import React, { FC } from "react";
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
      <div
        style={{
          position: "relative",
          width: "85%",
          height: 62,
          marginTop: 20,
        }}
      >
        {loading ? (
          <Loader />
        ) : (
          <Button
            label="Sign up"
            disabled={!state.valid}
            style={{
              width: "100%",
              height: "100%",
              fontSize: "18px",
            }}
            type="rounded"
          />
        )}
      </div>
    </form>
  );
};

export { Form };
