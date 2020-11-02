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

interface ITextInput {
  readonly type: "text" | "password" | "email";
  readonly placeholder: string;
  readonly name: string;
  readonly validation?: TextInputValidation;
  value: string;
}

interface IRadioInput {
  readonly name: string;
  readonly options: string[];
  readonly type: "radio";
  readonly validation?: RadioInputValidation;
  value: null | string;
}

interface ISelectInput {
  readonly name: string;
  readonly options: string[];
  readonly type: "select";
  readonly validation?: SelectInputValidation;
  value: null | string;
}

interface ICheckboxInput {
  readonly name: string;
  readonly options: string[];
  readonly type: "checkbox";
  value: null | string;
}

export type Input = IRadioInput | ITextInput | ISelectInput;

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
