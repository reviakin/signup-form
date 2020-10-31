import React, { FC, PropsWithChildren } from "react";

type Props = {
  disabled?: boolean;
  label: string;
  background?: string;
  width: number;
  height: number;
  type?: "rounded";
};

export type ButtonProps = PropsWithChildren<Props>;

const disabledBGD = "#A2A2A2";

const Button: FC<ButtonProps> = ({
  disabled,
  label,
  children,
  background = "#0094FF",
  width = 120,
  height = 20,
  type,
}) => (
  <button
    type="submit"
    disabled={disabled}
    style={{
      background: disabled ? disabledBGD : background,
      width,
      height,
      borderRadius: type === "rounded" ? "31px" : "",
      color: "#ffffff",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
    }}
  >
    {label}
    {children}
  </button>
);

export { Button };
