import React, { CSSProperties, FC } from "react";

type Props = { text: string; style?: CSSProperties };

const Title: FC<Props> = ({ text, style }) => (
  <p style={{ margin: 0, padding: 0, ...style }}>{text}</p>
);

export { Title };
