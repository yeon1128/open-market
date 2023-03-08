import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SignUp() {
  const initialState = {
    username: "",
    password: "",
    password2: "",
    phone_number: "",
    name: "",
  };
  const [values, setValues] = useState({ ...initialState });
  const { username, password, password2, phone_number, name } = values;
  const [errors, setErrors] = useState({ ...initialState });

  const isValids = (target, targetName) => {
    if (targetName === "username") {
      return /^[a-zA-Z0-9]{6,19}$/g.test(target);
    } else if (targetName === "password") {
      return /^(?=.*[a-z])(?=.*[0-9]).{8,16}$/g.test(target);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });

    // if (e.target.type === "text") {
    //   setValues({ ...values, username: e.target.value });
    // } else if (e.target.type === "password") {
    //   setValues({ ...values, password: e.target.value });
    // }

    if (!isValids(value, name)) {
      if (name === "username") {
        setErrors({
          ...errors,
          [name]:
            "6자 이상 20자 이내의 영문 소문자, 대문자, 숫자만 사용 가능합니다.",
        });
      } else if (name === "password") {
        setErrors({
          ...errors,
          [name]: "비밀번호는 8자 이상, 영소문자를 포함해야 합니다.",
        });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.username, values.password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>회원가입</legend>
        <label htmlFor="userId">아이디</label>
        <input
          type="text"
          id="userId"
          onChange={handleChange}
          value={username}
          name="username"
          required
        />
        {!isValids(username, "username") && <p>{errors.username}</p>}
        <button>중복확인</button>

        <label htmlFor="userPassword">비밀번호</label>
        <input
          type="password"
          id="userPassword"
          value={password}
          onChange={handleChange}
          name="password"
          required
        />
        {!isValids(password, "password") && <p>{errors.password}</p>}

        <button type="submit">가입하기</button>
      </fieldset>
    </form>
  );
}
