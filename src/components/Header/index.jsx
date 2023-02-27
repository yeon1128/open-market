import main_logo from "../../assets/images/main_logo.png";
import * as S from "./style";

function Header() {
  return (
    <S.HeaderContainer>
      <S.HeaderWrapper>
        <img src={main_logo} alt="메인 로고" />
        <form>
          <label className="ir" htmlFor="searchId">
            상품 검색
          </label>
          <input id="searchId" type="text" placeholder="상품을 검색해보세요!" />
          <button>클릭</button>
        </form>
      </S.HeaderWrapper>
    </S.HeaderContainer>
  );
}

export default Header;
