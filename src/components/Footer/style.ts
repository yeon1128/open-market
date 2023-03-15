import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme.bgColor};
  width: 100%;
`;

export const FooterWrapper = styled.div`
  max-width: 1060px;
  margin: 0 auto;
  position: relative;
  padding: 60px 0 63px;
`;

export const FooterNavList = styled.ul`
  display: flex;
  width: 100%;
  border-bottom: 1px solid ${(props) => props.theme.lightGray};
  padding-bottom: 30px;
  > li:first-child {
    padding-left: 0;
  }
  > li:last-child {
    border-right: 0;
  }
`;

export const FooterNavItem = styled.li`
  padding: 0 14px;
  border-right: 1px solid black;
  font-size: 14px;
`;

export const FooterInfo = styled.div`
  padding-top: 30px;
  color: ${(props) => props.theme.mediumGray};
  font-size: 14px;
  line-height: 24px;
  > h3 {
    font-weight: 700;
  }
`;
