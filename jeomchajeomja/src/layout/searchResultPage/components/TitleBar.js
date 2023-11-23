import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import back from "../../../img/white_back.svg";

const TitleBar = () => {
  const navigate = useNavigate();

  return (
    <Div>
      <LinkDiv>
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <SubTitle>로그아웃</SubTitle>
        </Link>
        <Span> | </Span>
        <Link style={{ textDecoration: "none", color: "inherit" }}>
          <SubTitle>내정보</SubTitle>
        </Link>
        <Span> | </Span>
        <Link style={{ textDecoration: "none", color: "inherit" }}>
          <SubTitle>장바구니</SubTitle>
        </Link>
      </LinkDiv>
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
      <SubHeader>
        모든 학습자료의 구매비용은 출력비 및 배송비를 포함한 수수료입니다.
      </SubHeader>
      <div style={{ height: "65px" }} />
    </Div>
  );
};

export default TitleBar;

const Div = styled.div`
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
  width: 100%;
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

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
`;

const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  color: ${({ theme }) => theme.colors.white};
  white-space: pre;
`;

const SubHeader = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: 26px;
  font-family: "Nanum Myeongjo";
`;
