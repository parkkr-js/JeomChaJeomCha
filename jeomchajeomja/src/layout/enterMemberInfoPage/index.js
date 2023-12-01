import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import PhoneNumForm from "./components/PhoneNumForm";
import AddressForm from "./components/AddressForm";
import AudioBtn from "../../common/AudioBtn";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import PostModal from "./components/PostModal";

function EnterMemberInfo() {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [activeForm, setActiveForm] = useState("phone");
  const phoneRef = useRef(null);
  const addressRef = useRef(null);
  const activatePhoneForm = () => setActiveForm("phone");
  const activateAddressForm = () => setActiveForm("address");
  const deactivateForms = () => setActiveForm(null);

  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === " " && !isListening) {
        playBeep();
        setIsListening(true);
        SpeechRecognition.startListening();
  
        // 현재 포커스된 요소 확인
        const activeElement = document.activeElement;
  
        // 전화번호 입력 폼이 활성화되어야 하는 경우
        if (activeElement === phoneRef.current) {
          setActiveForm("phone");
        }
        // 주소 입력 폼이 활성화되어야 하는 경우
        else if (activeElement === addressRef.current) {
          setActiveForm("address");
        }
      }
    };
    const playBeep = () => {
      const audioContext = new window.AudioContext();
      const oscillator = audioContext.createOscillator();
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
      oscillator.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.6);
    };

    const handleKeyUp = (event) => {
      if (event.key === " " && isListening) {
        setIsListening(false);
        SpeechRecognition.stopListening();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [isListening]);
  if (!browserSupportsSpeechRecognition) {
    return (
      <span>
        죄송합니다. 음성인식을 지원하지 않는 브라우저입니다.
        <br /> 크롬브라우저를 사용해주세요.
      </span>
    );
  }
  return (
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
          <br /> 음성 검색이 활성화됩니다.{" "}
        </Body1>
        <PhoneNumForm
        ref={phoneRef}
          transcript={activeForm === "phone" ? transcript : ""}
          isListening={isListening && activeForm === "phone"}
        />
      </Content1_1>

      <Content1_1>
        <SubTitle1>주소를 입력해주세요.</SubTitle1>
        <Body1>
          {" "}
          스페이스바를 2초간 누른 후 벨소리가 나면
          <br /> 음성 검색이 활성화됩니다.{" "}
        </Body1>
        <AddressForm
        ref={addressRef} 
          transcript={activeForm === "address" ? transcript : ""}
          isListening={isListening && activeForm === "address"}
        />
      </Content1_1>
      <PostModal/>
    </Container>
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

const Header1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.header1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  line-height: 150%;
`;

const Content1_1 = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: start;
  align-items: start; */
  width: 560px;
`;
const Content1_2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const SubTitle1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  line-height: 150%;
`;
const Body1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  line-height: 150%;
`;
