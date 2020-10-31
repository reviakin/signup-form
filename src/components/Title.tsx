import React, { FC } from "react";

type Props = { text: string };

const Title: FC<Props> = ({ text }) => <p>{text}</p>;

export { Title };
