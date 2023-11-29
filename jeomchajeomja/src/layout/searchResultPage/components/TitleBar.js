import { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

const TitleBar = () => {
  const navigate = useNavigate();
  const ref = useRef(null);

  useEffect(() => {
    ref.current.focus();
  }, []);

  return (
    <Column>
      <Row>
        <Button
          ref={ref}
          style={{ boxShadow: "0 0 5px #0079e0" }}
          onClick={() => navigate("../")}
        >
          뒤로가기
        </Button>
        <Body>ESC 버튼 클릭 시 이전 페이지로 돌아갑니다.</Body>
        <Button>음성 사용 설명서 듣기</Button>
        <LinkDiv>
          <Link
            to="/login"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <SubTitleReg>로그아웃</SubTitleReg>
          </Link>
          <SubTitle>&nbsp; | &nbsp;</SubTitle>
          <Link style={{ textDecoration: "none", color: "inherit" }}>
            <SubTitleReg>내정보</SubTitleReg>
          </Link>
          <SubTitle>&nbsp; | &nbsp;</SubTitle>
          <Link style={{ textDecoration: "none", color: "inherit" }}>
            <SubTitleReg>장바구니</SubTitleReg>
          </Link>
        </LinkDiv>
      </Row>
      <div style={{ height: "83px" }} />
      <Header>학습자료 검색</Header>
      <div style={{ height: "65px" }} />
    </Column>
  );
};

export default TitleBar;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 24px 240px;
  margin: 0 auto;
`;

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
  margin: 0 auto;
`;

const Header = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.header0};
  font-size: 50px;
  font-family: "Nanum Myeongjo";
  white-space: nowrap;
  margin: 0 auto;
`;

const SubTitleReg = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1_reg};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  margin: 0 auto;
`;

const SubTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  color: ${({ theme }) => theme.colors.white};
  white-space: pre;
  margin: 0 auto;
`;

const Button = styled.button`
  padding: 5px 10px;
  white-space: nowrap;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  font-size: ${({ theme }) => theme.fontSizes.body1};
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body2};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body2_reg};
  white-space: nowrap;
  margin: 0 auto;
`;

/* const SubHeader = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: 26px;
  font-family: "Nanum Myeongjo";
`; */
