import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { googleLogout } from "@react-oauth/google";
import { useRecoilState } from "recoil";
import { Credential } from "../recoil/atoms/Credential";

const TopNavBar = ({ handleFocus, handleBlur }) => {
  const navigate = useNavigate();
  const [credential, setCredential] = useRecoilState(Credential);

  const handleLogoutClick = () => {
    setCredential(null);
    googleLogout();
    navigate("/login");
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleShoppingCartClick = () => {
    navigate("/shoppingCart");
  };

  return (
    <Row>
      <TitleButton
        onFocus={handleFocus}
        onBlur={handleBlur}
        onClick={() => navigate(-1)}
      >
        뒤로가기
      </TitleButton>
      <LinkDiv>
        <TitleButton onFocus={handleFocus} onBlur={handleBlur}>
          점차점자 사용 설명서 듣기
        </TitleButton>
        <div style={{ width: "20px" }} />
        {credential === null ? (
          <SubTitleReg
            tabIndex={0}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={handleLoginClick}
            style={{ fontSize: "25px" }}
          >
            로그인
          </SubTitleReg>
        ) : (
          <>
            <SubTitleReg
              tabIndex={0}
              onFocus={handleFocus}
              onBlur={handleBlur}
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
              tabIndex={0}
              onFocus={handleFocus}
              onBlur={handleBlur}
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
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  navigate("/shoppingCart");
                }
              }}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onClick={handleShoppingCartClick}
              style={{ fontSize: "25px" }}
            >
              장바구니
            </SubTitleReg>
          </>
        )}
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
