import main_logo from "../../assets/images/main_logo.png";
import * as S from "./style";

function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <S.LogoImg src={main_logo} alt="메인 로고" />
        <S.SearchForm>
          <label className="ir" htmlFor="searchId">
            상품 검색
          </label>
          <S.SearchInp
            id="searchId"
            type="text"
            placeholder="상품을 검색해보세요!"
          />
          <S.SearchBtn />
        </S.SearchForm>
        <S.MenuList>
          <S.CartLink>
            <S.CartBtn />
            <S.CartBtnTxt>장바구니</S.CartBtnTxt>
          </S.CartLink>
          <S.MyPageLink>
            <S.MyPageBtn />
            <S.MyPageBtnTxt>마이페이지</S.MyPageBtnTxt>
          </S.MyPageLink>
        </S.MenuList>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}

export default Header;
