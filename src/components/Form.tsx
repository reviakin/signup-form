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
    <form onSubmit={onSubmit}>
      <Inputs inputs={state.inputs} change={change} />
      <div>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">accept terms and conditions</label>
      </div>
      <div>
        {loading ? (
          <Loader />
        ) : (
          <Button
            label="Signup"
            disabled={!state.isValid}
            width={343}
            height={62}
            type="rounded"
          />
        )}
      </div>
    </form>
  );
};

export { Form };
