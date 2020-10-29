import React, { FC } from "react";
import { map } from "lodash/fp";

type Props = {
  name: string;
  options: string[];
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: null | string;
};

const RadioInput: FC<Props> = ({ name, options, onChange, value }) => (
  <div>
    {map(
      (option) => (
        <div key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            onChange={onChange}
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
