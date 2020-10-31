import React, { FC, PropsWithChildren } from "react";

type Props = {
  disabled?: boolean;
  label: string;
  background?: string;
};

export type ButtonProps = PropsWithChildren<Props>;

const Button: FC<ButtonProps> = ({
  disabled,
  label,
  children,
  background = "#0094FF",
}) => (
  <button type="submit" disabled={disabled} style={{ background }}>
    {label}
    {children}
  </button>
);

export { Button };
