import React, { FC } from "react";

type Props = { color: string };

const Background: FC<Props> = ({ color }) => (
  <div
    style={{
      background: color,
      width: "100%",
      height: "100%",
      position: "absolute",
    }}
  />
);

export { Background };
