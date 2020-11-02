import React, { FC } from "react";

import { RadioInput } from "../RadioInput";
import { TextInput } from "../TextInput";
import { Input } from "../../tools/hooks/types";

type Props = {
  inputs: Input[];
  change: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Inputs: FC<Props> = ({ inputs, change }) => (
  <>
    {inputs.map((input) =>
      input.type === "radio" ? (
        <RadioInput
          key={input.name}
          name={input.name}
          options={input.options}
          value={input.value}
          onChange={change}
        />
      ) : input.type === "select" ? (
        <div key={input.name}>
          <select name={input.name}>
            <option value=""></option>
            {input.options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div key={input.name}>
          <TextInput
            type={input.type}
            placeholder={input.placeholder}
            changeHandler={change}
            name={input.name}
            value={input.value}
          />
        </div>
      )
    )}
  </>
);

export { Inputs };
