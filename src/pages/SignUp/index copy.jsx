import React, { useEffect, useState } from "react";
import axios from "axios";

export default function SignUp() {
  const initialState = {
    username: "",
    password: "",
    password2: "",
    phone_number: "",
    name: "",
    company_registration_number: "",
    store_name: "",
  };
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);
  const [values, setValues] = useState({ ...initialState });
  const [isBlurs, setIsBlurs] = useState({
    username: false,
    password: false,
    password2: false,
    phone_number: false,
    name: false,
    company_registration_number: false,
    store_name: false,
  });
  const {
    username,
    password,
    password2,
    phone_number,
    name,
    company_registration_number,
    store_name,
  } = values;

  const handleData = (e) => {
    if (e.target.type === "text") {
      setUserId(e.target.value);
    } else if (e.target.type === "password") {
      setUserPassword(e.target.value);
    }

    setValues({
      ...values,
      [name]: values,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userId, userPassword);
  };

  useEffect(() => {
    if (userPassword.length < 8 && userPassword !== "") {
      setPasswordError("비밀번호는 8자 이상이어야 합니다.");
    } else if (userPassword === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    }
  }, [userPassword]);

  const isValid = (target, targetName) => {
    if (targetName === "username") {
      return /^[a-z]+[a-zA-Z0-9]{5,19}$/g.test(target);
    } else if ((targetName = "password")) {
      /^(?=.*[a-z])(?=.*[0-9]).{8,16}$/g.test(target);
    } else if (targetName === "checkPassWord") {
      target === password ? true : false;
    } else if (targetName === "phone_number") {
      return /^01([0|1|6|7|8|9])([0-9]{3,4})([0-9]{4})$/g.test(target);
    } else if (targetName === "name") {
      return target !== "" ? true : false;
    } else if (targetName === "company_registration_number") {
      return /^[0-9]{10}$/g.test(target);
    }
  };

  const onBlurHandler = (e) => {
    setIsBlurs({ ...isBlurs, [e.target.name]: true });
    if (!e.target.value) {
      setErrors({ ...ErrorResponse, [e.target.name]: "필수 정보입니다." });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>회원가입</legend>
        <label htmlFor="userId">아이디</label>
        <input
          type="text"
          id="userId"
          onChange={handleData}
          value={userId}
          onBlur={onBlurHandler}
          required
        />
        <button>중복확인</button>

        <label htmlFor="userPassword">비밀번호</label>
        <input
          type="password"
          id="userPassword"
          onChange={handleData}
          value={userPassword}
          onBlur={onBlurHandler}
          required
        />

        <button type="submit">가입하기</button>
      </fieldset>
    </form>
  );
}
