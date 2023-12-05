import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const TopNavBar = ({ focusRef }) => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    navigate("/login");
  };

  const handleShoppingCartClick = () => {
    navigate("/shoppingCart");
  };

  return (
    <Row>
      <TitleButton
        ref={(ref) => (focusRef.current[1] = ref)}
        onClick={() => navigate(-1)}
      >
        뒤로가기
      </TitleButton>
      <LinkDiv>
        <TitleButton ref={(ref) => (focusRef.current[2] = ref)}>
          점차점자 사용 설명서 듣기
        </TitleButton>
        <div style={{ width: "20px" }} />
        <SubTitleReg
          ref={(ref) => (focusRef.current[3] = ref)}
          onClick={handleLogoutClick}
          style={{ fontSize: "25px" }}
        >
          로그아웃
        </SubTitleReg>
        <div
          style={{
            borderLeft: "2px solid black",
            height: "20px",
            margin: "9px 16px",
          }}
        />
        <SubTitleReg
          ref={(ref) => (focusRef.current[4] = ref)}
          style={{ fontSize: "25px" }}
        >
          내정보
        </SubTitleReg>
        <div
          style={{
            borderLeft: "2px solid black",
            height: "20px",
            margin: "9px 16px",
          }}
        />
        <SubTitleReg
          ref={(ref) => (focusRef.current[5] = ref)}
          onClick={handleShoppingCartClick}
          style={{ fontSize: "25px" }}
        >
          장바구니
        </SubTitleReg>
      </LinkDiv>
    </Row>
  );
};

export default TopNavBar;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-shrink: 0;
`;

const SubTitleReg = styled.button`
  border: none;
  background-color: transparent;
  line-height: 150%;
  font-family: "Nanum Gothic";
  padding: 0;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1_reg};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  white-space: nowrap;
`;

const TitleButton = styled.button`
  padding: 5px 10px;
  white-space: nowrap;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  font-size: ${({ theme }) => theme.fontSizes.body1};
`;
