import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { Credential } from "../../../recoil/atoms/Credential";
import { googleLogout } from "@react-oauth/google";
import { Tutorial } from "../../../common/Tutorial";

const TitleBar = ({ handleFocus, handleBlur }) => {
  const navigate = useNavigate();
  const [credential, setCredential] = useRecoilState(Credential);

  const handleLogoutClick = () => {
    setCredential(null);
    googleLogout();
    navigate("/login");
  };

  const handleAudioBtnClick = () => {
    const speech = new SpeechSynthesisUtterance(Tutorial);
    speech.lang = "ko-KR";
    window.speechSynthesis.speak(speech);
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleShoppingCartClick = () => {
    navigate("/shoppingCart");
  };

  return (
    <Column>
      <Row>
        <Button
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={{ boxShadow: "0 0 5px #0079e0" }}
          onClick={() => navigate(-1)}
        >
          뒤로가기
        </Button>
        <LinkDiv>
          <Button
            onClick={handleAudioBtnClick}
            onFocus={handleFocus}
            onBlur={handleBlur}
          >
            점차점자 사용 설명서
          </Button>
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleLogoutClick();
                  }
                }}
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
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    navigate("/shoppingCart");
                  }
                }}
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
      </Row>
      <div style={{ height: "83px" }} />
      <Header tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
        학습자료 검색
      </Header>
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
  height: 293px;
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
`;

const Header = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.header0};
  font-size: ${({ theme }) => theme.fontSizes.header1};
  font-family: "Nanum Myeongjo";
  white-space: nowrap;
`;

const SubTitleReg = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1_reg};
  font-size: 25px;
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

/* const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body2};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body2_reg};
  white-space: nowrap;
  margin: 0 auto;
`; */

/* const SubHeader = styled.div`
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: 26px;
  font-family: "Nanum Myeongjo";
`; */
