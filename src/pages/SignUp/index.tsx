import * as React from "react";
import { MainContainer } from "../../components/MainContainer";
import SignUpForm from "../../components/SignUpForm";
import * as S from "./style";

export default function SignUp() {
  return (
    <S.SignUpContainer>
      <SignUpForm />
    </S.SignUpContainer>
  );
}
