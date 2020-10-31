import React, { FC } from "react";
import { TextInput } from "./TextInput";
import { compose, map, merge, reduce } from "lodash/fp";
import { RadioInput } from "./RadioInput";
import { useForm } from "../tools";
import { Input } from "../tools/hooks/types";
import { Box } from "../tools";

type Props = {
  submit: (a: any) => void;
  inputs: Input[];
};

const Form: FC<Props> = ({ submit, inputs }) => {
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
      {map(
        (input) =>
          input.type !== "radio" ? (
            <div key={input.name}>
              <TextInput
                type={input.type}
                placeholder={input.placeholder}
                changeHandler={change}
                name={input.name}
                value={input.value}
              />
            </div>
          ) : (
            <RadioInput
              key={input.name}
              name={input.name}
              options={input.options}
              value={input.value}
              onChange={change}
            />
          ),
        state.inputs
      )}
      <div>
        <select name="" id="">
          <option value=""></option>
        </select>
      </div>
      <div>
        <input type="checkbox" name="" id="" />
        <label htmlFor="">accept terms and conditions</label>
      </div>
      <div>
        <button
          type="submit"
          // disabled={!state.isValid}
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export { Form };
