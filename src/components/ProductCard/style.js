import styled from "styled-components";

export const ProductImg = styled.img`
  width: 100%;
  padding-bottom: 16px;
`;
export const SellerName = styled.p`
  padding-bottom: 10px;
  font-size: 16px;
  color: ${(props) => props.theme.mediumGray};
  line-height: 22px;
`;
export const ProductName = styled.p`
  padding-bottom: 10px;
  font-size: 18px;
  line-height: 22px;
`;
export const Price = styled.p`
  font-weight: 700;
  font-size: 24px;
  > span {
    font-weight: 400;
    font-size: 16px;
  }
`;
