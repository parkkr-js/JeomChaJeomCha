import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const TopNavBar = ({ ref }) => {
  const navigate = useNavigate();

  return (
    <Row>
      <TitleButton
        ref={ref}
        style={{ boxShadow: "0 0 5px #0079e0" }}
        onClick={() => navigate(-1)}
      >
        뒤로가기
      </TitleButton>
      <TitleButton>음성 사용 설명서 듣기</TitleButton>
      <LinkDiv>
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <SubTitleReg style={{ fontSize: "25px" }}>로그아웃</SubTitleReg>
        </Link>
        <SubTitleReg style={{ fontSize: "25px" }}>&nbsp; | &nbsp;</SubTitleReg>
        <Link style={{ textDecoration: "none", color: "inherit" }}>
          <SubTitleReg style={{ fontSize: "25px" }}>내정보</SubTitleReg>
        </Link>
        <SubTitleReg style={{ fontSize: "25px" }}>&nbsp; | &nbsp;</SubTitleReg>
        <Link
          to="/shoppingCart"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <SubTitleReg style={{ fontSize: "25px" }}>장바구니</SubTitleReg>
        </Link>
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
  margin: 0 auto;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  flex-shrink: 0;
`;

const SubTitleReg = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1_reg};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  white-space: nowrap;
`;

const TitleButton = styled.button`
  padding: 5px 10px;
  white-space: nowrap;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  font-size: ${({ theme }) => theme.fontSizes.body1};
`;
