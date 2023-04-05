import * as React from "react";
import * as S from "./style";

interface NormalBtn {
  children: React.ReactNode;
  // icon: string;
  type: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function NormalBtn({ children, ...props }: NormalBtn) {
  return (
    <S.NormalBtn onClick={props.onClick}>
      {/* {props.icon && <img src={props.icon} />} */}
      {children}
    </S.NormalBtn>
  );
}
