import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { Button, ButtonProps } from "./Button";

export default {
  title: "Example/Button",
  component: Button,
  argTypes: {
    background: { control: "color" },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Button",
  width: 343,
  height: 62,
};

export const Rounded = Template.bind({});
Rounded.args = {
  label: "Button",
  width: 343,
  height: 62,
  type: "rounded",
};
