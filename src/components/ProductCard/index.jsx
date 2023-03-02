import product from "../../assets/images/product.png";
import * as S from "./style";

function ProductCard() {
  return (
    <>
      <li>
        <figure>
          <img src={product} alt="" />
          <figcaption>
            <p>
              <small>우당탕탕 라이캣의 실험실</small>
            </p>
            <p>Hack Your Life 개발자 노트북 파우치</p>
            <strong>28,000</strong>
            <span>원</span>
          </figcaption>
        </figure>
      </li>
    </>
  );
}

export default ProductCard;
