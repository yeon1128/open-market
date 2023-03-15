import * as React from "react";

import { Link } from "react-router-dom";
import * as S from "./style";

export default function Footer() {
  return (
    <S.FooterContainer>
      <S.FooterWrapper>
        <nav>
          <S.FooterNavList>
            <S.FooterNavItem>호두샵 소개</S.FooterNavItem>
            <S.FooterNavItem>이용약관</S.FooterNavItem>
            <S.FooterNavItem>개인정보처리방침</S.FooterNavItem>
            <S.FooterNavItem>전자금융거래약관</S.FooterNavItem>
            <S.FooterNavItem>청소년보호정책</S.FooterNavItem>
            <S.FooterNavItem>제휴문의</S.FooterNavItem>
          </S.FooterNavList>
        </nav>
        <S.FooterInfo>
          <h3>(주)HODU SHOP</h3>
          <address>제주특별자치도 제주시 동광고 137 제주코딩베이스캠프</address>
          <p>사업자 번호 : 000-0000-0000 | 통신판매업</p>
          <p>대표 : 김호두</p>
        </S.FooterInfo>
      </S.FooterWrapper>
    </S.FooterContainer>
  );
}
