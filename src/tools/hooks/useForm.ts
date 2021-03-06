import { useReducer, useCallback } from "react";
import { merge } from "lodash/fp";

import {
  State,
  Actions,
  Input,
  FormInput,
  UseFromReturn,
  SelectInputValidation,
  TextInputValidation,
  ISelectInput,
} from "./types";

const isTextValidation = (validation: any): validation is TextInputValidation =>
  (validation != null && typeof validation.pattern === "string") ||
  (validation.pattern === null &&
    typeof validation.required === "boolean" &&
    typeof validation.minLength === "number") ||
  validation.minLength === null;

const checkTextValueValid = ({
  validation,
  value,
}: {
  validation: TextInputValidation;
  value: any;
}) =>
  typeof validation.minLength === "number" &&
  typeof value === "string" &&
  validation.minLength > value.length
    ? false
    : typeof validation.pattern === "string" &&
      typeof value === "string" &&
      !RegExp(validation.pattern).test(value)
    ? false
    : validation.required && !value
    ? false
    : true;

const checkInputValid = ({
  validation,
  value,
}: {
  validation: SelectInputValidation | TextInputValidation;
  value: any;
}) =>
  isTextValidation(validation)
    ? checkTextValueValid({ value, validation })
    : validation.required
    ? !!value
    : true;

const isSelectInputType = (input: any): input is ISelectInput =>
  input.type &&
  typeof input.type === "string" &&
  ["radio", "select", "checkbox"].includes(input.type);

const reducer = (state: State, action: Actions): State => {
  if (action.type === "UPDATE_INPUT") {
    const { name, value } = action.payload;

    return state.map((input) =>
      input.name === name && isSelectInputType(input)
        ? {
            ...input,
            value: value === input.value || !value ? null : value,
            touched: true,
            valid: input.validation
              ? checkInputValid({
                  validation: input.validation,
                  value: value === input.value || !value ? null : value,
                })
              : true,
          }
        : input.name === name
        ? {
            ...input,
            value,
            touched: true,
            valid: input.validation
              ? checkInputValid({ validation: input.validation, value })
              : true,
          }
        : input
    );
  }
  return state;
};

const addFormProps = (input: Input): FormInput =>
  merge(input, {
    valid: input.validation ? false : true,
    touched: false,
  });

const isInputValid = ({ valid }: FormInput): boolean => valid;

function useForm(inputs: Input[]): UseFromReturn {
  const [state, dispatch] = useReducer(reducer, inputs.map(addFormProps));

  const onInputChangeHandler = useCallback(
    ({ name, value }: { name: string; value: string }) =>
      dispatch({ type: "UPDATE_INPUT", payload: { name, value } }),
    []
  );

  return [
    { inputs: state, valid: state.every(isInputValid) },
    { change: onInputChangeHandler },
  ];
}

export { useForm };
