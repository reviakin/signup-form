import React, { FC } from "react";

type Props = {
  disabled?: boolean;
  label: string;
};

const Button: FC<Props> = ({ disabled, label }) => (
  <button type="submit" disabled={disabled}>
    {label}
  </button>
);

export { Button };
