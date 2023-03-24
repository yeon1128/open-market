import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import {
  RegisterPostData,
  axiosPostRegister,
  getNameStatus,
  getRegisterStatus,
  getRegisterError,
  getJoinUserType,
  resetAll,
} from "../../feature/registerSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import Loading from "../common/Loading";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const initialState = {
    username: "",
    password: "",
    password2: "",
    phone_number: "",
    name: "",
    checkbox: false,
  };
  const [values, setValues] = useState(initialState);
  const { username, password, password2, phone_number, name, checkbox } =
    values;
  const [errors, setErrors] = useState(initialState);
  const [isBlurs, setIsBlurs] = useState({
    username: false,
    password: false,
    password2: false,
    phone_number: false,
    name: false,
    checkbox: false,
  });
  const [idDupCheck, setIdDupCheck] = useState("");

  const userType = useAppSelector(getJoinUserType);
  const registerStatus = useAppSelector(getRegisterStatus);
  const registerError = useAppSelector(getRegisterError);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  // 유효성 검사
  const isValids = (target: any, targetName: String) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });

    // if (e.target.type === "text") {
    //   setValues({ ...values, username: e.target.value });
    // } else if (e.target.type === "password") {
    //   setValues({ ...values, password: e.target.value });
    // }

    if (!isValids(value, name)) {
      setIsBlurs({
        ...isBlurs,
        [name]: true,
      });
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

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setIsBlurs({ ...isBlurs, [e.target.name]: true });

    !e.target.value &&
      setErrors({ ...errors, [e.target.name]: "필수 정보입니다." });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    let userData: RegisterPostData = {
      username,
      password,
      password2,
      phone_number,
      name,
      checkbox,
    };
    console.log(userData);
    console.log(registerStatus);

    dispatch(axiosPostRegister({ userType, userData }));

    if (registerStatus === "loading") {
      return <Loading />;
    }
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
        setIdDupCheck(res.data.Success);
      }
    } catch (error) {
      console.log(error);
      setIdDupCheck(error.response.data.FAIL_Message);
    }
  };

  useEffect(() => {
    //가입 하기 버튼 클릭후 성공 or 실패 경우
    if (registerStatus === "succeeded") {
      alert("가입이 완료되었습니다 :)");
      dispatch(resetAll());
      navigate("/");
    } else if (registerStatus === "failed") {
      alert(registerError);
    }
  }, [registerStatus]);

  const handleCheckBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, ["checkbox"]: e.target.checked });
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
        {!isValids(username, "username") && !idDupCheck && (
          <p>{errors.username}</p>
        )}
        {idDupCheck && <p>{idDupCheck}</p>}

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
        {!isValids(password2, "password2") && <p>{errors.password2}</p>}

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
        <input type="checkbox" onChange={handleCheckBox} required />
        <label htmlFor="check">
          호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고
          동의합니다.
        </label>

        <button type="submit">가입하기</button>
      </fieldset>
    </form>
  );
}

export default SignUpForm;
