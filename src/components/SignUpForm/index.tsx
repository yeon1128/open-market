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
  resetName,
} from "../../feature/registerSlice";
import { useAppDispatch, useAppSelector } from "../../store";
import Loading from "../common/Loading";
import { useNavigate } from "react-router-dom";
import NormalBtn from "../common/Button/NormalBtn";
import * as S from "./style";
import SignUpInput from "./Input/SignUpInput";
import PhoneInput from "./Input/PhoneInput";
import limitLength from "../../utils/limitLength";
import { phone1RegExp, phone2RegExp, phone3RegExp } from "../../utils/regExp";

function SignUpForm() {
  const initialState = {
    username: "",
    password: "",
    password2: "",
    phone_number: "",
    name: "",
    checkbox: false,
    phone1: "010",
    phone2: "",
    phone3: "",
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

  const nameStatus = useAppSelector(getNameStatus);
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
    nameStatus !== "idle" && dispatch(resetName());
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });

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

  // 휴대폰번호
  const handleClickPhone = (selected: string) => {
    setValues({ ...values, ["phone1"]: selected });
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // 숫자 4자리만 입력 가능
    const newValue = limitLength(value, 4).replace(/[^0-9]/g, "");
    const message = "* 휴대폰번호 입력 형식을 확인해주세요.";
    const regExp = name === "phone2" ? phone2RegExp : phone3RegExp;
    const error = newValue.match(regExp) ? "" : message;
    setValues({ ...values, [name]: newValue });
    setErrors({ ...errors, ["phone_number"]: error });
  };

  return (
    <S.SignUpForm onSubmit={handleSubmit}>
      <S.SignUpFieldSet>
        <legend>회원가입</legend>

        <S.InputContainer>
          <SignUpInput
            labelTxt="아이디"
            type="text"
            id="userId"
            onChange={handleChange}
            value={username}
            name="username"
            onBlur={handleBlur}
            isValids={isValids}
            error={errors.username}
            idDupCheck={idDupCheck}
            userIdCheck={userIdCheck}
          />

          <SignUpInput
            labelTxt="비밀번호"
            type="password"
            id="userPassword"
            onChange={handleChange}
            value={password}
            name="password"
            onBlur={handleBlur}
            isValids={isValids}
            error={errors.password}
          />

          <SignUpInput
            labelTxt="비밀번호 확인"
            type="password"
            id="userPassword2"
            onChange={handleChange}
            value={password2}
            name="password2"
            onBlur={handleBlur}
            isValids={isValids}
            error={errors.password2}
          />

          <SignUpInput
            labelTxt="이름"
            type="text"
            id="name"
            onChange={handleChange}
            value={name}
            name="name"
            onBlur={handleBlur}
            isValids={isValids}
            error={errors.name}
          />

          <PhoneInput
            onClick={handleClickPhone}
            onChange={handleChangePhone}
            value1={values.phone1}
            value2={values.phone2}
            value3={values.phone3}
            isValids={isValids}
            error={errors.phone_number}
            value={phone_number}
            name="phone_number"
          />
        </S.InputContainer>
        <input type="checkbox" onChange={handleCheckBox} required />
        <label htmlFor="check">
          호두샵의 이용약관 및 개인정보처리방침에 대한 내용을 확인하였고
          동의합니다.
        </label>
        <button type="submit">가입하기</button>
      </S.SignUpFieldSet>
    </S.SignUpForm>
  );
}

export default SignUpForm;
