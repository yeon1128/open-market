import * as React from "react";
import * as S from "./style";
import NormalBtn from "../../common/Button/NormalBtn";

export interface Input {
  type: string;
  id: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  name: string;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  labelTxt: string;
  isValids: (target: any, targetName: string) => any;
  error?: string;
  idDupCheck?: string;
  userIdCheck?: () => void;
}

export default function SignUpInput(props: Input) {
  return (
    <>
      <S.InputWrapper>
        <S.InputLabel htmlFor={props.id}>{props.labelTxt}</S.InputLabel>
        <S.Input
          type={props.type}
          id={props.id}
          onChange={props.onChange}
          value={props.value}
          name={props.name}
          onBlur={props.onBlur}
        />
        {props.userIdCheck && (
          <NormalBtn type={"button"} onClick={props.userIdCheck}>
            {"중복확인"}
          </NormalBtn>
        )}
        {!props.isValids(props.value, props.name) && props.error && (
          <S.ErrorMessage>{props.error}</S.ErrorMessage>
        )}
        {props.isValids(props.value, props.name) && props.idDupCheck && (
          <S.ErrorMessage>{props.idDupCheck}</S.ErrorMessage>
        )}
      </S.InputWrapper>
    </>
  );
}
