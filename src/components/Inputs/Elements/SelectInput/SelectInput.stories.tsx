import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";

import { SelectInput, SelectInputProps } from "./SelectInput";

export default {
  title: "Example/SelectInput",
  component: SelectInput,
} as Meta;

const Template: Story<SelectInputProps> = (args) => <SelectInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  name: "shoes",
  value: null,
  placeholder: "choose shoes brand",
  options: ["nike", "adidas", "puma"],
};
