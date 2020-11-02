import React, { FC } from "react";

import { RadioInput } from "../RadioInput";
import { TextInput } from "../TextInput";
import { Input } from "../../tools/hooks/types";

type Props = {
  inputs: Input[];
  change: (input: { name: string; value: string }) => void;
};

const Inputs: FC<Props> = ({ inputs, change }) => (
  <>
    {inputs.map(({ name, ...input }) =>
      input.type === "radio" ? (
        <RadioInput
          key={name}
          name={name}
          options={input.options}
          value={input.value}
          onChange={({ target: { value } }) => change({ value, name })}
        />
      ) : input.type === "select" ? (
        <div key={name}>
          <select
            name={name}
            onChange={({ target: { value } }) => change({ value, name: name })}
          >
            <option value=""></option>
            {input.options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div key={name}>
          <TextInput
            type={input.type}
            placeholder={input.placeholder}
            changeHandler={({ target: { value } }) => change({ value, name })}
            name={name}
            value={input.value}
          />
        </div>
      )
    )}
  </>
);

export { Inputs };
