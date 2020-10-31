import React, { FC } from "react";
import { TextInput } from "./TextInput";
import { compose, map } from "lodash/fp";
import { RadioInput } from "./RadioInput";
import { useForm } from "../tools";
import { State } from "../tools/hooks/types";

type Props = {
  submit: (state: State) => void;
};

const Form: FC<Props> = ({ submit }) => {
  const [state, { change }] = useForm();

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
    compose(
      () => submit(state),
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
