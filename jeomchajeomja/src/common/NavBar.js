import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/점차점자로고.svg";
import AudioBtn from "./AudioBtn";

function NavBar() {
  return (
    <Div>
      <LinkDiv>
        <AudioBtn />
        <Link to="/login" style={{ textDecoration: "none", color: "inherit" }}>
          <Body>로그인</Body>
        </Link>
      </LinkDiv>
      <Header>
        <RowDiv>
          점차점자
          <MainLogo src={Logo} alt="점차점자 로고" />
        </RowDiv>
        <SubHeader>
          더 넓은 시야, 더 큰 꿈을 위해, 여러분들의 더 넓은 미래를 기대합니다.
        </SubHeader>
      </Header>
    </Div>
  );
}
export default NavBar;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 293px;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Body = styled.body`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  font-style: normal;
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  /* font-family: NanumGothic; */
  /* font-size: 25px; */
  /* font-weight: 700; */
  color: ${({ theme }) => theme.colors.white};
  width: 80px;
  line-height: 37.5px;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 30px;
  padding-left: 860px;
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  /* padding-top: 50px; */
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.header0};
  font-size: 50px;
  font-family: "Nanum Myeongjo";
`;

const SubHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-top: 20px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: 26px;
`;

const MainLogo = styled.img`
  background-color: ${({ theme }) => theme.colors.black};
  width: 300px;
  height: auto;
`;
