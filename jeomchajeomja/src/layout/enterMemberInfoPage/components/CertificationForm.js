import React, { useState, useRef, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "../../home/components/Button";
import styled from "styled-components";
import VerificationModal from "./VerificationModal";
import { useRecoilState } from "recoil";
import { VerifiNumState } from "../../../recoil/atoms/VerifiNumState";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import ConvertNumberToKorean from "../components/ConvertNumberToKorean";

function CertificationForm({ inputRef }) {
  const [isListening, setIsListening] = useState(false);
  const [certiNum, setCertiNum] = useRecoilState(VerifiNumState);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const { transcript: certiScript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const handleCertiNumChange = (event) => {
    if (!isListening) {
      setCertiNum(event.target.value);
    }
  };
  const handleConfirmClick = () => {
    setIsModalVisible(true);
  };

  useEffect(() => {
    const inputElement = inputRef.current;
    let startTimer;
    const handleKeyDown = (event) => {
      if (event.key === " " && !isListening && !startTimer) {
        startTimer = setTimeout(() => {
          playBeep();
          setIsListening(true);
          SpeechRecognition.startListening({
            language: "ko-KR",
          });
          startTimer = null;
        }, 200);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === " ") {
        if (startTimer) {
          clearTimeout(startTimer);
          startTimer = null;
        }
        if (isListening) {
          setIsListening(false);
          SpeechRecognition.stopListening();
        }
      }
    };

    const playBeep = () => {
      const audioContext = new window.AudioContext();

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);

      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(440, audioContext.currentTime);

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.6);
    };

    if (inputElement) {
      inputElement.addEventListener("keydown", handleKeyDown);
      inputElement.addEventListener("keyup", handleKeyUp);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("keydown", handleKeyDown);
        inputElement.removeEventListener("keyup", handleKeyUp);
      }
      if (startTimer) {
        clearTimeout(startTimer);
      }
    };
  }, [isListening]);

  useEffect(() => {
    if (isListening && certiScript) {
      const numbersOnly = certiScript.replace(/\s+/g, '');
      setCertiNum(numbersOnly);
    }
  }, [certiScript, isListening]);

  useEffect(() => {
    console.log(inputRef.current.value);
    if (inputRef.current.value === certiNum && certiScript && !isListening) {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = "ko-KR";
      speech.text = ConvertNumberToKorean(certiNum);
      window.speechSynthesis.speak(speech);
    }
  }, [certiScript, isListening]);

  useEffect(() => {
    let timer;
    if (isModalVisible) {
      timer = setTimeout(() => {
        setIsModalVisible(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isModalVisible]);

  if (!browserSupportsSpeechRecognition) {
    return (
      <span>
        죄송합니다. 음성인식을 지원하지 않는 브라우저입니다.
        <br /> 크롬브라우저를 사용해주세요.
      </span>
    );
  }

  return (
    <>
      <Container1>
        <Body1>
          인증번호를 입력해주세요.
          <br /> 인증번호를 받지 못했다면 Enter를 다시 눌러주세요.
        </Body1>
        <Container2>
          <Paper
            component="form"
            sx={{
              display: "flex",
              alignItems: "center",
              width: "454px",
              height: "60px",
              borderRadius: "15px",
              border: "2px solid #000",
              boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.10)",
              overflow: "hidden",
              backgroundColor: isListening ? "red" : "transparent",
            }}
          >
            <InputBase
              inputRef={inputRef}
              value={certiNum}
              onChange={handleCertiNumChange}
              sx={{
                ml: 1,
                flex: 1,
                fontSize: "24px",
                fontWeight: "bold",
                color: "black",
                textAlign: "right",
                backgroundColor: isListening ? "red" : "transparent",
              }}
            />
          </Paper>
          <Button
            style={{
              display: "inline-flex",
              width: "fit-content",
              height: "60px",
              padding: "9px 17px",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "15px",
              fontSize: "24px",
              fontWeight: 700,
              fontFamily: "NanumGothic",
              fontStyle: "normal",
              lineHeight: "36px",
            }}
            onClick={handleConfirmClick}
          >
            확인
          </Button>
        </Container2>
      </Container1>
      {isModalVisible && <VerificationModal />}
    </>
  );
}
export default CertificationForm;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  justify-content: start;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 20px;
`;

const Body1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  line-height: 150%;
`;
