import React, { CSSProperties, FC, PropsWithChildren } from "react";

type Props = {
  disabled?: boolean;
  label: string;
  background?: string;
  style?: CSSProperties;
  type?: "rounded";
};

export type ButtonProps = PropsWithChildren<Props>;

const disabledBGD = "#A2A2A2";

const Button: FC<ButtonProps> = ({
  disabled,
  label,
  children,
  background = "#0094FF",
  style,
  type,
}) => (
  <button
    type="submit"
    disabled={disabled}
    style={{
      background: disabled ? disabledBGD : background,
      borderRadius: type === "rounded" ? "31px" : "",
      color: "#ffffff",
      border: "none",
      cursor: disabled ? "not-allowed" : "pointer",
      ...style,
    }}
  >
    {label}
    {children}
  </button>
);

export { Button };
