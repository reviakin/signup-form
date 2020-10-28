import React, { FC } from "react";

type Props = {};

const Form: FC<Props> = (props) => {
  return (
    <div
      style={{
        width: 400,
        height: 605,
        background: "#ffffff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "8px",
      }}
    >
      <div>
        <h5>Create a new account</h5>
      </div>
      <form action="" method="post">
        <div>
          <input type="text" placeholder="name" />
        </div>
        <div>
          <input type="email" placeholder="email" />
        </div>
        <div>
          <input type="password" placeholder="password" />
        </div>
        <div>
          <select name="" id="">
            <option value=""></option>
          </select>
        </div>
        <div>
          <input type="radio" name="" id="" />
          <label>male</label>
          <input type="radio" name="" id="" />
          <label>female</label>
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <label htmlFor="">accept term and conditions</label>
        </div>
        <div>
          <button type="button">Sign up</button>
        </div>
      </form>
    </div>
  );
};

export { Form };
