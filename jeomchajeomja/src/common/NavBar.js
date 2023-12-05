import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Logo from "../img/점차점자로고.svg";
import AudioBtn from "../common/AudioBtn";
import { useRecoilState } from "recoil";
import { Credential } from "../recoil/atoms/Credential";
import { googleLogout } from "@react-oauth/google";

function NavBar({ handleFocus, handleBlur }) {
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
    <Container>
      <Div>
        <LinkDiv>
          <AudioBtn handleFocus={handleFocus} handleBlur={handleBlur} />
          <div style={{ width: "20px" }} />
          {credential === null ? (
            <SubTitleReg
              tabIndex={0}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onClick={handleLoginClick}
              style={{ fontSize: "25px", cursor: "pointer" }}
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
                style={{ fontSize: "25px", cursor: "pointer" }}
              >
                로그아웃
              </SubTitleReg>
              <div
                style={{
                  borderLeft: "2px solid black",
                  height: "20px",
                  margin: "9px 16px",
                  borderColor: "white",
                }}
              />
              <SubTitleReg
                tabIndex={0}
                onFocus={handleFocus}
                onBlur={handleBlur}
                style={{ fontSize: "25px", cursor: "pointer" }}
              >
                내정보
              </SubTitleReg>
              <div
                style={{
                  borderLeft: "2px solid black",
                  height: "20px",
                  margin: "9px 16px",
                  borderColor: "white",
                }}
              />
              <SubTitleReg
                tabIndex={0}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onClick={handleShoppingCartClick}
                style={{ fontSize: "25px", cursor: "pointer" }}
              >
                장바구니
              </SubTitleReg>
            </>
          )}
        </LinkDiv>
        <Header>
          <RowDiv tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
            점차점자
            <MainLogo src={Logo} alt="점차점자 로고" />
          </RowDiv>
          <SubHeader tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
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
  margin: 0 auto;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const SubTitleReg = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1_reg};
  font-size: 25px;
`;

const LinkDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 30px;
  margin-bottom: 88px;
  width: 100%;
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
  font-family: "NanumMyeongjo", serif;
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
