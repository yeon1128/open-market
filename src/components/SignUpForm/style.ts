import styled from "styled-components";

export const SignUpForm = styled.div`
  position: relative;
  /* width: 550px; */
`;
export const SignUpFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* & > div:nth-child(2) {
    margin: 34px auto;
    width: 480px;
  } */
`;
export const InputContainer = styled.div`
  padding: 40px 35px;
  border: 1px solid ${(props) => props.theme.gray.light};
  border-radius: 0 0 10px 10px;
`;
