import * as React from "react";
import { useState } from "react";
import up_arrow_icon from "../../../assets/images/up_arrow_icon.png";
import down_arrow_icon from "../../../assets/images/down_arrow_icon.png";
import * as S from "./style";

type SelectInput = {
  selectItems: string[];
  onClick: (selected: string) => void;
  checkItem: string;
  width: string;
  padding: string;
};

export default function SelectInput({
  selectItems,
  onClick,
  checkItem,
  width,
  padding,
}: SelectInput) {
  const [onToggle, setOnToggle] = useState(false);
  const hadleItemClick = (item: string) => {
    setOnToggle(!onToggle);
    onClick(item);
  };

  return (
    <S.SelectedInputContainer width={width}>
      <S.SelectedInputWrapper padding={padding}>
        <S.SelectInput value={checkItem ? checkItem : selectItems[0]} />
        <S.ArrowBtn onClick={() => setOnToggle(!onToggle)}>
          <img
            src={onToggle ? down_arrow_icon : up_arrow_icon}
            alt="검색"
            width="14px"
            height="5px"
          />
        </S.ArrowBtn>
      </S.SelectedInputWrapper>
      <S.SelectList on={onToggle} width={width}>
        {selectItems.map((v, i) => (
          <li key={i}>
            <button type="button" onClick={() => hadleItemClick(v)}>
              {v}
            </button>
          </li>
        ))}
      </S.SelectList>
    </S.SelectedInputContainer>
  );
}
