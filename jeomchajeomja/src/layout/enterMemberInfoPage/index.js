import React, { useRef, useState, useEffect } from "react";
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
    let emptyField = "";

    if (!address) {
      emptyField = "주소";
    } else if (!subAddress) {
      emptyField = "세부 주소";
    } else if (!certiNum) {
      emptyField = "인증 번호";
    }

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
  useEffect(() => {
    let timer;
    if (isModalVisible) {
      timer = setTimeout(() => {
        setIsModalVisible(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isModalVisible]);
  return (
    <>
      <Container>
        <NavDiv>
          <Btn onClick={() => navigate("../")} alt="뒤로가기">
            뒤로가기
          </Btn>
          <AudioBtn
            customStyle={{
              color: "black",
              border: "1px solid var(--Black, #000",
            }}
          />
        </NavDiv>
        <Header1>회원 정보 입력</Header1>
        <Content1_1>
          <SubTitle1>전화번호를 입력해주세요.</SubTitle1>
          <Body1>
            스페이스바를 2초간 누른 후 벨소리가 나면
            <br /> 음성 검색이 활성화됩니다.
          </Body1>
          <PhoneNumForm />
        </Content1_1>
        <Content1_1>
          <SubTitle1>주소를 입력해주세요.</SubTitle1>
          <Body1>
            스페이스바를 2초간 누른 후 벨소리가 나면
            <br /> 음성 검색이 활성화됩니다.
          </Body1>
          <AddressForm />
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
  border: 1px solid #000;
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
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  line-height: 37.5px;
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
