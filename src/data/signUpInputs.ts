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
      minLength: null,
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
    },
  },
  {
    type: "radio",
    name: "gender",
    options: ["MALE", "FEMALE"],
    value: null,
    validation: { required: true },
  },
  {
    type: "select",
    name: "country",
    options: countryList,
    value: null,
    validation: { required: true },
  },
];

export { signUpInputs };
