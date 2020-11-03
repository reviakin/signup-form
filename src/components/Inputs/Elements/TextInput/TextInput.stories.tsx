import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { TextInput, TextInputProps } from "./TextInput";

export default {
  title: "Example/TextInput",
  component: TextInput,
} as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "shoes",
  value: "",
  placeholder: "best placeholder",
};
