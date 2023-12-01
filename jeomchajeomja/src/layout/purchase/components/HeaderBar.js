import React from "react";
import styled from "styled-components";

const HeaderBar = () => {
  return (
    <Div>
      <Header id="modal-modal-title">결제하기</Header>
      <div style={{ height: "12px" }} />
      <SubTitle id="modal-modal-description">
        페이 앱 또는 가상계좌로 결제 가능합니다.
      </SubTitle>
    </Div>
  );
};

export default HeaderBar;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  width: 100%;
  padding: 34px 40px 20px;
`;

const Header = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: ${({ theme }) => theme.fontSizes.header1};
  white-space: nowrap;
`;

const SubTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: 25px;
  white-space: nowrap;
`;
