import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import back from "../../../img/white_back.svg";

const TitleBar = () => {
  const navigate = useNavigate();

  return (
    <Column>
      <Row>
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
      <Row>
        <img
          src={back}
          alt="Back Button"
          style={{ cursor: "pointer" }}
          onClick={() => navigate("../")}
        />
        <Header>학습자료 검색</Header>
        <div style={{ width: "48px" }} />
      </Row>
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
  width: 100vw;
  padding: 24px 240px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.header0};
  font-size: 50px;
  font-family: "Nanum Myeongjo";
`;

const SubTitleReg = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1_reg};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
`;

const SubTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  color: ${({ theme }) => theme.colors.white};
  white-space: pre;
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

/* const SubHeader = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: 26px;
  font-family: "Nanum Myeongjo";
`; */
