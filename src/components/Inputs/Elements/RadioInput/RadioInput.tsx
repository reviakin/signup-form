import React, { FC } from "react";
import { map } from "lodash/fp";

type Props = {
  name: string;
  options: string[];
  onChange: (input: { name: string; value: string }) => void;
  value: null | string;
  classname?: string;
};

const RadioInput: FC<Props> = ({
  name,
  options,
  onChange,
  value,
  classname,
}) => (
  <>
    {map(
      (option) => (
        <div key={option}>
          <input
            className={classname}
            onChange={() => onChange({ name, value: option })}
            // onClick={() => onChange({ name, value: option })}
            type="radio"
            name={name}
            value={option}
            checked={option === value}
          />
          <label>
            {option.charAt(0).toUpperCase() + option.slice(1).toLowerCase()}
          </label>
        </div>
      ),
      options
    )}
  </>
);

export { RadioInput };
