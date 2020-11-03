import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { RadioInput, RadioInputProps } from "./RadioInput";

export default {
  title: "Example/RadioInput",
  component: RadioInput,
} as Meta;

const Template: Story<RadioInputProps> = (args) => <RadioInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "gender",
  options: ["MALE", "FEMALE"],
  value: null,
};
