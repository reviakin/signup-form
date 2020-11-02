export type TextInputValidation = {
  readonly pattern: string | null;
  readonly required: boolean;
  readonly minLength: number | null;
  readonly invalidMessage: string;
};

export type RadioInputValidation = {
  readonly required: boolean;
  readonly invalidMessage: string;
};

export type SelectInputValidation = {
  readonly required: boolean;
  readonly invalidMessage: string;
};

export interface ITextInput {
  readonly type: "text" | "password" | "email";
  readonly placeholder: string;
  readonly name: string;
  readonly validation?: TextInputValidation;
  value: string;
}

export interface ISelectInput {
  readonly name: string;
  readonly options: string[];
  readonly type: "radio" | "select" | "checkbox";
  readonly validation?: RadioInputValidation;
  value: null | string;
}

export type Input = ISelectInput | ITextInput;

type UpdateValueAction = {
  type: "UPDATE_VALUE";
  payload: {
    name: string;
    value: string;
  };
};

type UpdateInputAction = {
  type: "UPDATE_INPUT";
  payload: {
    name: string;
    value: string;
  };
};

export type Actions = UpdateValueAction | UpdateInputAction;

export type FormInput = Input & {
  valid: boolean;
  touched: boolean;
};

export type State = FormInput[];

export type UseFromReturn = [
  { inputs: State; valid: boolean },
  { change: (input: { name: string; value: string }) => void }
];
