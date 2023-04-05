import * as React from "react";
import SelectInput from "./SelectInput";
import * as S from "./style";

interface InputPhone {
  onClick: (selected: string) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value1: string;
  value2: string;
  value3: string;
  error: string;
  isValids: (target: any, targetName: string) => any;
  value: string;
  name: string;
}

export default function PhoneInput({
  onClick,
  onChange,
  value1,
  value2,
  value3,
  error,
  isValids,
  value,
  name,
}: InputPhone) {
  const selectItems = ["010", "011", "016", "017", "018", "019"];
  return (
    <S.PhoneContainer>
      {/* <label htmlFor="phoneNumber">휴대폰 번호</label>
      <input
        type="tel"
        id="phoneNumber"
        value={phone_number}
        onChange={handleChange}
        name="phone_number"
        onBlur={handleBlur}
      />
      {!isValids(phone_number, "phone_number") && <p>{errors.phone_number}</p>} */}

      <S.InputLabel htmlFor="phoneNumber">휴대폰 번호</S.InputLabel>
      <div>
        <SelectInput
          selectItems={selectItems}
          onClick={onClick}
          checkItem={value1}
          width="150px"
          padding="16px 14px 16px 0"
        />
        <S.Input
          name="phone2"
          value={value2}
          onChange={onChange}
          type="text"
          width="150px"
        />
        <S.Input
          name="phone3"
          value={value3}
          onChange={onChange}
          type="text"
          width="150px"
        />
      </div>
      {!isValids(value, name) && <S.ErrorMessage>{error}</S.ErrorMessage>}
    </S.PhoneContainer>
  );
}
