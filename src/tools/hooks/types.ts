interface ITextInput {
  readonly type: "text" | "password" | "email";
  readonly placeholder: string;
  readonly name: string;
  readonly validation: {
    readonly pattern: string;
    readonly required: boolean;
    readonly minLength?: number;
  };
  value: string;
}

interface IRadioInput {
  readonly name: string;
  readonly options: string[];
  readonly type: "radio";
  value: null | string;
}

interface ISelectInput {
  readonly name: string;
  readonly options: string[];
  readonly type: "select";
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

export type Actions = UpdateValueAction;

export type State = {
  isValid: boolean;
  inputs: Input[];
};
