import { Input } from "../tools/hooks/types";
import { countryList } from "./countryList";

const signUpInputs: Input[] = [
  {
    type: "text",
    placeholder: "name",
    value: "",
    name: "name",
    validation: {
      pattern: "[a-zA-Z]+",
      required: true,
      minLength: null,
      invalidMessage: "Please enter a valid name",
    },
  },
  {
    type: "email",
    placeholder: "email",
    value: "",
    name: "email",
    validation: {
      pattern: "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$",
      required: true,
      minLength: null,
      invalidMessage: "Please enter a valid email adress",
    },
  },
  {
    type: "password",
    placeholder: "password",
    value: "",
    name: "password",
    validation: {
      pattern: null,
      required: true,
      minLength: 6,
      invalidMessage: "Password must contain at least 6 symbols",
    },
  },
  {
    type: "select",
    name: "country",
    options: countryList,
    value: null,
    validation: {
      required: true,
      invalidMessage: "You must select your country",
    },
  },
  {
    type: "radio",
    name: "gender",
    options: ["MALE", "FEMALE"],
    value: null,
    validation: {
      required: true,
      invalidMessage: "You must select the gender",
    },
  },
  {
    type: "checkbox",
    name: "terms&condition",
    options: ["Accept terms and conditions"],
    value: null,
    validation: {
      required: true,
      invalidMessage: "You must accept the policies",
    },
  },
];

export { signUpInputs };
