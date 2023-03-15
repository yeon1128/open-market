import * as React from "react";
import product from "../../assets/images/product.png";
import * as S from "./style";

function ProductCard() {
  return (
    <>
      <li>
        <figure>
          <S.ProductImg src={product} alt="" />
          <figcaption>
            <S.SellerName>우당탕탕 라이캣의 실험실</S.SellerName>
            <S.ProductName>
              Hack Your Life 개발자 노트북 파우치Hack Your Life 개발자 노트북
              파우치Hack Your Life 개발자 노트북 파우치Hack Your Life 개발자
              노트북 파우치Hack Your Life 개발자 노트북 파우치Hack Your Life
              개발자 노트북 파우치Hack Your Life 개발자 노트북 파우치
            </S.ProductName>
            <S.Price>
              28,000
              <span>원</span>
            </S.Price>
          </figcaption>
        </figure>
      </li>
    </>
  );
}

export default ProductCard;
