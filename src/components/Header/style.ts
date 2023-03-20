import styled from "styled-components";
import search_btn from "../../assets/images/search_btn.png";
import shopping_cart_icon from "../../assets/images/shopping_cart_icon.png";
import user_icon from "../../assets/images/user_icon.png";

export const HeaderContainer = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  background-color: #fff;
  z-index: 10;
`;

export const HeaderWrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  position: relative;
  display: flex;
  /* align-items: center; */
  height: 50px;
  padding: 14px 12px;
`;

export const SearchInp = styled.input`
  padding: 0px 13px;
  margin-left: auto;
  /* min-width: 200px; */
  width: 100%;
  height: 100%;
  background: transparent;
  font-size: 16px;
  border: 2px solid ${(props) => props.theme.mainColor};
  border-radius: 50px;
`;

export const SearchBtn = styled.button`
  width: 28px;
  height: 28px;
  background: center / contain url(${search_btn}) no-repeat;
  position: absolute;
  top: 12.5px;
  right: 0;
  cursor: pointer;
`;

export const SearchForm = styled.form`
  position: relative;
  width: 100%;
`;

export const LogoImg = styled.img`
  margin-right: 30px;
`;

export const CartBtn = styled.button`
  width: 32px;
  height: 32px;
  background: center / contain url(${shopping_cart_icon}) no-repeat;
  display: block;
  margin: 0 auto;
`;
export const CartBtnTxt = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.gray.medium};
  padding-top: 4px;
`;
export const MyPageBtn = styled.button`
  width: 32px;
  height: 32px;
  background: center / contain url(${user_icon}) no-repeat;
  display: block;
  margin: 0 auto;
`;
export const MyPageBtnTxt = styled.p`
  font-size: 12px;
  color: ${(props) => props.theme.gray.medium};
  padding-top: 4px;
`;
export const CartLink = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 4px; */
  /* align-items: center; */
`;
export const MyPageLink = styled.div`
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 4px; */
  /* margin: 0 auto; */
  /* align-items: center; */
`;
export const MenuList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 26px;
  width: 100%;
  height: 100%;
  align-items: center;
  margin-right: auto;
`;
