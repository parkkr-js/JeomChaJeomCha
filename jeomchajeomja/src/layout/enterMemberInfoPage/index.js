import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PhoneNumForm from "./components/PhoneNumForm";
import AddressForm from "./components/AddressForm";
import AudioBtn from "../../common/AudioBtn";
import { AddressState } from "../../recoil/atoms/AddressState";
import { SubAddressState } from "../../recoil/atoms/AddressState";
import { VerifiNumState } from "../../recoil/atoms/VerifiNumState";
import { useRecoilValue } from "recoil";
import VerificationModal from "./components/VerificationModal";

function EnterMemberInfo() {
  const message = "회원가입이 완료되었습니다.";
  const navigate = useNavigate();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const address = useRecoilValue(AddressState);
  const subAddress = useRecoilValue(SubAddressState);
  const certiNum = useRecoilValue(VerifiNumState);

  const handleStartClick = () => {
    let emptyFields = [];
    if (!address) {
      emptyFields.push("주소");
    }
    if (!subAddress) {
      emptyFields.push("세부 주소");
    }
    if (!certiNum) {
      emptyFields.push("인증 번호");
    }

    const emptyField = emptyFields.join(", ");

    if (emptyField) {
      const speech = new SpeechSynthesisUtterance(
        `${emptyField}를 입력해주세요.`
      );
      speech.lang = "ko-KR";
      window.speechSynthesis.speak(speech);
    } else {
      setIsModalVisible(true);
    }
  };

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

  useEffect(() => {
    let timer;
    if (isModalVisible) {
      timer = setTimeout(() => {
        setIsModalVisible(false);
        navigate("/");
      }, 2300);
    }
    return () => clearTimeout(timer);
  }, [isModalVisible]);
  return (
    <>
      <Container>
        <NavDiv>
          <Btn
            onFocus={handleFocus}
            onBlur={handleBlur}
            onClick={() => navigate("../")}
            alt="뒤로가기"
          >
            뒤로가기
          </Btn>
          <AudioBtn
            onFocus={handleFocus}
            onBlur={handleBlur}
            customStyle={{
              color: "black",
              border: "2px solid var(--Black, #000",
            }}
          />
        </NavDiv>
        <Header1 tabIndex="0" onFocus={handleFocus} onBlur={handleBlur}>
          회원 정보 입력
        </Header1>
        <Content1_1>
          <SubTitle1 tabIndex="0" onFocus={handleFocus} onBlur={handleBlur}>
            전화번호를 입력해주세요.
          </SubTitle1>
          <Body1 tabIndex="0" onFocus={handleFocus} onBlur={handleBlur}>
            스페이스바를 2초간 누른 후 벨소리가 나면
            <br /> 음성 검색이 활성화됩니다.
          </Body1>
          <PhoneNumForm onFocus={handleFocus} onBlur={handleBlur} />
        </Content1_1>
        <Content1_1>
          <SubTitle1 tabIndex="0" onFocus={handleFocus} onBlur={handleBlur}>
            주소를 입력해주세요.
          </SubTitle1>
          <Body1 tabIndex="0" onFocus={handleFocus} onBlur={handleBlur}>
            스페이스바를 2초간 누른 후 벨소리가 나면
            <br /> 음성 검색이 활성화됩니다.
          </Body1>
          <AddressForm onFocus={handleFocus} onBlur={handleBlur} />
        </Content1_1>
        <StartBtn onClick={handleStartClick}>시작하기</StartBtn>
      </Container>
      {isModalVisible && <VerificationModal message={message} />}
    </>
  );
}

export default EnterMemberInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1440px;
  height: auto;
  margin: 0 auto;
`;

const NavDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: fit-content;
  margin-top: 25px;
  padding-left: 240px;
  padding-right: 240px;
  margin-bottom: 115px;
`;

const Btn = styled.button`
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  width: fit-content;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 2px solid #000;
  color: #000;
  font-family: "NanumGothic", serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%;
`;

const Header1 = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.header1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  line-height: 75px;
  margin-bottom: 38px;
`;

const Content1_1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 560px;
  height: fit-content;
  margin-bottom: 40px;
`;

const SubTitle1 = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  line-height: 45px;
  margin-bottom: 10px;
`;
const Body1 = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.button1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: 400;
  line-height: 150%;
  padding-bottom: 15px;
`;

const StartBtn = styled.button`
  display: inline-flex;
  padding: 9px 20px;
  width: 172px;
  height: 71px;
  margin-top: 30px;
  margin-bottom: 90px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 15px;
  background: var(--Black, #000);
  color: var(--Background---White, #fff);
  font-size: 35px;
  font-style: normal;
  font-weight: 700;
  line-height: 52.5px;
`;
