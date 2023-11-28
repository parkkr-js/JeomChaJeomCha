import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/점차점자로고.svg";
import AudioBtn from "../common/AudioBtn";

function NavBar() {
  return (
    <Container>
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
    </Container>
  );
}
export default NavBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Div = styled.div`
  display: flex;
  flex-shrink: 0;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
  width: 1200px;
  height: 293px;
  justify-content: center;
  margin: 0 auto;
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
  color: ${({ theme }) => theme.colors.white};
  width: 80px;
  line-height: 37.5px;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 88px;
  /* padding-left: 250px;
  padding-right: 240px; */
  /* width: 100%;
  height: fit-content; */
`;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  width: fit-content;
  height: auto;
  justify-content: center;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.header0};
  font-size: ${({ theme }) => theme.fontSizes.header1};
  font-family: "Nanum Myeongjo", serif;
  font-style: normal;
  line-height: 75px;
`;

const SubHeader = styled.div`
color: ${({ theme }) => theme.colors.white};
font-family: 'NanumMyeongjo', serif;
font-size: 26px;
font-style: normal;
font-weight: ${({ theme }) => theme.fontWeights.header1};
line-height: 39px;
padding-bottom: 23px;
`;

const MainLogo = styled.img`
  background-color: ${({ theme }) => theme.colors.black};
  width: 316px;
  height: 75px;
`;
