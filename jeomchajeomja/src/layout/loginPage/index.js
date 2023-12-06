import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/google_logo.svg";
import { useRecoilState } from "recoil";
import { Credential } from "../../recoil/atoms/Credential";
import { useGoogleLogin } from "@react-oauth/google";

function Login() {
  const navigate = useNavigate();
  const [credential, setCredential] = useRecoilState(Credential);
  const login = useGoogleLogin({
    onSuccess: (res) => {
      setCredential(res.credential);
      navigate("/enterMemberInfo");
    },
    onFailure: (err) => {
      console.log(err);
    },
  });

  const handleFocus = (event) => {
    const text = event.target.innerText;
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "ko-KR";
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  const handleBlur = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <Column>
      <Row>
        <TitleButton
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={() => navigate(-1)}
        >
          뒤로가기
        </TitleButton>
        <TitleButton onFocus={handleFocus} onBlur={handleBlur}>
          점차점자 사용 설명서
        </TitleButton>
      </Row>
      <div style={{ height: "115px" }} />
      <Header tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
        로그인
      </Header>
      <div style={{ height: "95px" }} />
      <GoogleButton onFocus={handleFocus} onBlur={handleBlur} onClick={login}>
        <img src={logo} alt="google logo" />
        <div style={{ width: "20px" }} />
        구글로 로그인
      </GoogleButton>
    </Column>
  );
}

export default Login;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 25px 240px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
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

const Header = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: ${({ theme }) => theme.fontSizes.header1};
  white-space: nowrap;
`;

const GoogleButton = styled.button`
  display: flex;
  align-items: center;
  width: 414px;
  height: 60px;
  padding: 11px;
  border-radius: 15px;
  background-color: var(--Black, #000);
  /* googleshadow1 */
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.17),
    0px 0px 1px 0px rgba(0, 0, 0, 0.08);
  color: ${({ theme }) => theme.colors.white};
  font-size: 25px;
  font-weight: ${({ theme }) => theme.fontWeights.button1};
  font-family: "NanumGothic";
  line-height: 150%;
`;
