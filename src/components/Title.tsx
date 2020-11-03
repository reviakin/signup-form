import React, { CSSProperties, FC } from "react";

type Props = { text: string; style?: CSSProperties; classname?: string };

const Title: FC<Props> = ({ text, style, classname }) => (
  <p style={{ margin: 0, padding: 0, ...style }} className={classname}>
    {text}
  </p>
);

export { Title };
