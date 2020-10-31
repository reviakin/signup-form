import { Input } from "../tools/hooks/types";

const signUpInputs: Input[] = [
  {
    type: "text",
    placeholder: "name",
    value: "",
    name: "name",
    validation: {
      pattern: "[a-zA-Z]+",
      required: true,
    },
  },
  {
    type: "text",
    placeholder: "email",
    value: "",
    name: "email",
    validation: {
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      required: true,
    },
  },
  {
    type: "password",
    placeholder: "password",
    value: "",
    name: "password",
    validation: {
      pattern: "",
      required: true,
      minLength: 6,
    },
  },
  {
    type: "radio",
    name: "gender",
    options: ["MALE", "FEMALE"],
    value: null,
  },
];

export { signUpInputs };
