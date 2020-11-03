import React, { FC, Fragment } from "react";

import { RadioInput } from "../RadioInput";
import { TextInput } from "../TextInput";
import { FormInput, ITextInput } from "../../tools/hooks/types";
import { Title } from "../Title";

type Props = {
  inputs: FormInput[];
  change: (input: { name: string; value: string }) => void;
};

const isTextInputType = (input: any): input is ITextInput =>
  input.type &&
  typeof input.type === "string" &&
  ["text", "email", "password"].includes(input.type);

const Inputs: FC<Props> = ({ inputs, change }) => (
  <>
    {inputs.map(({ name, ...input }) =>
      input.type === "radio" ? (
        <div
          key={name}
          style={{
            display: "flex",
            justifyContent: "left",
            width: "85%",
            position: "relative",
          }}
        >
          <RadioInput
            name={name}
            options={input.options}
            value={input.value}
            onChange={change}
          />
          {input.validation && input.touched && !input.valid ? (
            <Title
              style={{
                color: "red",
                position: "absolute",
                bottom: "-19px",
                fontSize: "12px",
              }}
              text={input.validation.invalidMessage}
            />
          ) : null}
        </div>
      ) : input.type === "select" ? (
        <div
          key={name}
          style={{
            display: "flex",
            justifyContent: "left",
            width: "85%",
            position: "relative",
          }}
        >
          <select
            style={{
              width: "100%",
              height: "50px",
              background: "#F5F8FA",
              borderRadius: "8px",
              border: "none",
            }}
            key={name}
            name={name}
            onChange={({ target: { value } }) => change({ value, name: name })}
          >
            <option value=""></option>
            {input.options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </select>
          {input.validation && input.touched && !input.valid ? (
            <Title
              style={{
                color: "red",
                position: "absolute",
                bottom: "-19px",
                fontSize: "12px",
              }}
              text={input.validation.invalidMessage}
            />
          ) : null}
        </div>
      ) : input.type === "checkbox" ? (
        <div
          key={name}
          style={{
            display: "flex",
            justifyContent: "left",
            width: "85%",
            position: "relative",
          }}
        >
          {input.options.map((option) => (
            <>
              <input
                key={option}
                type="checkbox"
                checked={option === input.value}
                onChange={() => change({ name, value: option })}
              />
              <label>{option}</label>
            </>
          ))}
          {input.validation && input.touched && !input.valid ? (
            <Title
              style={{
                color: "red",
                position: "absolute",
                bottom: "-19px",
                fontSize: "12px",
              }}
              text={input.validation.invalidMessage}
            />
          ) : null}
        </div>
      ) : isTextInputType(input) ? (
        <div key={name} style={{ position: "relative", width: "85%" }}>
          <TextInput
            type={input.type}
            placeholder={input.placeholder}
            changeHandler={({ target: { value } }) => change({ value, name })}
            name={name}
            value={input.value}
            style={{ height: "50px", width: "100%" }}
          />
          {input.validation && input.touched && !input.valid ? (
            <Title
              style={{
                color: "red",
                position: "absolute",
                bottom: "-19px",
                fontSize: "12px",
              }}
              text={input.validation.invalidMessage}
            />
          ) : null}
        </div>
      ) : null
    )}
  </>
);

export { Inputs };
