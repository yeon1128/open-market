import styled from "styled-components";

// SignUpInput
export const InputWrapper = styled.div`
  margin-bottom: 12px;
`;
export const InputLabel = styled.label`
  display: block;
  margin-bottom: 10px;
  color: ${(props) => props.theme.gray.medium};
`;
export const Input = styled.input<{ width?: string }>`
  width: ${({ width }) => (width ? width : "346px")};
  border: 1px solid ${(props) => props.theme.gray.light};
  outline-color: ${(props) => props.theme.gray.light};
  border-radius: 5px;
  padding: 17px 16px;
  font-weight: 400;
  line-height: 20px;
  font-size: 16px;
`;
export const ErrorMessage = styled.p<{ error?: string }>`
  font-weight: 400;
  font-size: 16px;
  color: red;
  padding-top: 10px;
`;

// PhoneInput
export const PhoneContainer = styled.div`
  div {
    display: flex;
    gap: 12px;
  }
`;
export const InputPhone = styled.input`
  /* max-width: 152px; */
  border: 1px solid ${(props) => props.theme.gray.light};
  outline-color: ${(props) => props.theme.gray.light};
  border-radius: 5px;
  /* padding: 17px 16px; */
  font-weight: 400;
  line-height: 20px;
  font-size: 16px;
  /* margin-right: 12px; */
`;

// SelectedInput
export const SelectedInputContainer = styled.div<{ width?: string }>`
  width: ${({ width }) => width};
  display: inline-block;
`;
export const SelectedInputWrapper = styled.div<{
  maxWidth?: string;
  minWidth?: string;
  padding?: string;
}>`
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
  padding: ${({ padding }) => padding};

  position: relative;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 22px;
  border: 1px solid ${(props) => props.theme.gray.light};
  border-radius: 5px;
  outline-color: ${(props) => props.theme.mainColor};
`;
export const SelectInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  text-align: center;
  font-size: 16px;
  line-height: 20px;
`;
export const ArrowBtn = styled.div`
  position: absolute;
  cursor: pointer;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
`;
export const SelectList = styled.ul<{
  on: boolean;
  width?: string;
}>`
  display: ${({ on }) => (on ? "block" : "none")};
  width: ${({ width }) => width};

  margin-top: 60px;
  position: absolute;
  max-height: 152px;
  overflow-y: scroll;
  box-shadow: 4px 4px 14px 0px #00000026;
  border: 1px solid ${(props) => props.theme.gray.light};
  border-radius: 5px;
  background-color: #fff;
  z-index: 100;
  li > button {
    font-size: 16px;
    line-height: 20px;
    cursor: pointer;
    width: 100%;
    height: 40px;
    text-align: center;
    padding: 0 10px;
    &:hover {
      background-color: ${(props) => props.theme.bgColor};
    }
  }
`;
