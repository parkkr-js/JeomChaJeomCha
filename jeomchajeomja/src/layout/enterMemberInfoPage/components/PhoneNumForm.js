import React, { useState, useEffect, useRef } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "../../home/components/Button";
import styled from "styled-components";
import CertificationForm from "./CertificationForm";
import { PhonNumState } from "../../../recoil/atoms/PhoneNumState";
import { useRecoilState } from "recoil";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function PhoneNumForm() {
  const [isListening, setIsListening] = useState(false);
  const [phoneNum, setPhoneNum] = useRecoilState(PhonNumState);
  const [showCertificationForm, setShowCertificationForm] = useState(false);
  const inputRef = useRef(null);
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const handlePhoneNumChange = (event) => {
    if (!isListening) {
      setPhoneNum(event.target.value);
    }
  };

  const handleButtonClick = () => {
    setShowCertificationForm(true);
  };
  useEffect(() => {
    const inputElement = inputRef.current;
    let startTimer;
    const handleKeyDown = (event) => {
      if (event.key === " " && !isListening && !startTimer) {
        startTimer = setTimeout(() => {
          playBeep();
          setIsListening(true);
          SpeechRecognition.startListening();
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

      gainNode.gain.setValueAtTime(0.1, audioContext.currentTime); // 볼륨을 0.1로 설정

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
    if (isListening) {
      setPhoneNum(transcript)
    }
  }, [transcript, isListening]);

  useEffect(() => {
    console.log(inputRef.current.value);
    if ((inputRef.current.value === phoneNum) && transcript && !isListening) {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = "ko-KR";
      speech.text = phoneNum;
      window.speechSynthesis.speak(speech);
    }
  }, [transcript, isListening]);

  if (!browserSupportsSpeechRecognition) {
    return (
      <span>
        죄송합니다. 음성인식을 지원하지 않는 브라우저입니다.
        <br /> 크롬브라우저를 사용해주세요.
      </span>
    );
  }

  const isButtonEnabled =
    phoneNum && phoneNum.length >= 11 && phoneNum.length <= 14;

  return (
    <>
      <Container>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "357px",
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
            value={phoneNum}
            onChange={handlePhoneNumChange}
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
          disabled={!isButtonEnabled}
          onClick={handleButtonClick}
        >
          인증번호 발송
        </Button>
      </Container>
      {showCertificationForm && <CertificationForm inputRef={inputRef}/>}
    </>
  );
}
export default PhoneNumForm;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  align-items: center;
  justify-content: start;
  gap: 20px;
`;
