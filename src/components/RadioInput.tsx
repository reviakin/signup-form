import React, { FC } from "react";
import { map } from "lodash/fp";

type Props = {
  name: string;
  options: string[];
  onChange: (input: { name: string; value: string }) => void;
  value: null | string;
};

const RadioInput: FC<Props> = ({ name, options, onChange, value }) => (
  <div>
    {map(
      (option) => (
        <div key={option}>
          <input
            onClick={() => onChange({ name, value: option })}
            type="radio"
            name={name}
            value={option}
            checked={option === value}
          />
          <label>{option}</label>
        </div>
      ),
      options
    )}
  </div>
);

export { RadioInput };
