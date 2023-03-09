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
  const [isBlurs, setIsBlurs] = useState({
    username: false,
    password: false,
    password2: false,
    phone_number: false,
    name: false,
  });
  const [idDupCheck, setIdDupCheck] = useState("");

  // 유효성 검사
  const isValids = (target, targetName) => {
    if (targetName === "username") {
      return /^[a-zA-Z0-9]{6,19}$/g.test(target);
    } else if (targetName === "password") {
      return /^(?=.*[a-z])(?=.*[0-9]).{8,16}$/g.test(target);
    } else if (targetName === "password2") {
      return target !== password ? false : true;
    } else if (targetName === "name") {
      return target === "" ? false : true;
    } else if (targetName === "phone_number") {
      return /^[0-9]{10}$/g.test(target);
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
      } else if (name === "password2" && value !== password) {
        setErrors({ ...errors, [name]: "비밀번호가 일치하지 않습니다." });
      } else if (name === "phone_number") {
        setErrors({
          ...errors,
          [name]:
            "핸드폰 번호는 01*으로 시작해야 하는 10~11자리 숫자여야 합니다.",
        });
      }
    }
  };

  const handleBlur = (e) => {
    setIsBlurs({ ...isBlurs, [e.target.name]: true });

    !e.target.value &&
      setErrors({ ...errors, [e.target.name]: "필수 정보입니다." });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values.username, values.password);
  };

  const userIdCheck = async () => {
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API_KEY}/accounts/signup/valid/username/`,
        {
          username,
        }
      );

      if (res.data.Success === "멋진 아이디네요 :)") {
        setIdDupCheck(res.Success);
      } else if (res.data.FAIL_Message === "이미 사용 중인 아이디입니다.") {
        setIdDupCheck("이미 사용 중인 아이디입니다.");
      } else if (res.data.FAIL_Message === "username 필드를 추가해주세요 :)") {
        setIdDupCheck("username 필드를 추가해주세요 :)");
      }
    } catch (error) {
      console.log(error);
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
          onChange={handleChange}
          value={username}
          name="username"
          onBlur={handleBlur}
        />
        {!isValids(username, "username") && <p>{errors.username}</p>}
        {!isValids(username, "username") && <p>{idDupCheck}</p>}

        <button type="button" onClick={userIdCheck}>
          중복확인
        </button>

        <label htmlFor="userPassword">비밀번호</label>
        <input
          type="password"
          id="userPassword"
          value={password}
          onChange={handleChange}
          name="password"
          onBlur={handleBlur}
        />
        {!isValids(password, "password") && <p>{errors.password}</p>}

        <label htmlFor="userPassword2">비밀번호 확인</label>
        <input
          type="password"
          id="userPassword2"
          value={password2}
          onChange={handleChange}
          name="password2"
          onBlur={handleBlur}
        />
        {isBlurs.password2 && <p>{errors.password2}</p>}

        <label htmlFor="name">이름</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={handleChange}
          name="name"
          onBlur={handleBlur}
        />
        {!isValids(name, "name") && <p>{errors.name}</p>}

        <label htmlFor="phoneNumber">휴대폰 번호</label>
        <input
          type="tel"
          id="phoneNumber"
          value={phone_number}
          onChange={handleChange}
          name="phone_number"
          onBlur={handleBlur}
        />
        {!isValids(phone_number, "phone_number") && (
          <p>{errors.phone_number}</p>
        )}

        <button type="submit">가입하기</button>
      </fieldset>
    </form>
  );
}
