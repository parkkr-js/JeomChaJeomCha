import React, { useState, useRef, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "../../home/components/Button";
import styled from "styled-components";
import FindAddressModal from "./FindAddressModal";
import { useRecoilValue } from "recoil";
import { SubAddressState } from "../../../recoil/atoms/AddressState";
import { useRecoilState } from "recoil";
import { AddressState } from "../../../recoil/atoms/AddressState";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function AddressForm() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const address = useRecoilValue(AddressState);
  const [subAddress, setSubAddress] = useRecoilState(SubAddressState);
  const { transcript } = useSpeechRecognition();
  const subAddressInputRef = useRef(null);

  const handleFindAddressClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleAddressChange = (event) => {
    if (!isListening) {
      setSubAddress(event.target.value);
    }
  };

  useEffect(() => {
    const inputElement = subAddressInputRef.current;
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
      if (event.key === " " && isListening) {
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
  }, [isListening, subAddressInputRef]);

  useEffect(() => {
    if (isListening && transcript) {
      setSubAddress(transcript);
    }
  }, [transcript, isListening]);

  useEffect(() => {
    if (subAddress && transcript && !isListening) {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = "ko-KR";
      speech.text = subAddress;
      window.speechSynthesis.speak(speech);
    }
  }, [isListening]);

  return (
    <Colunm>
      <Row>
        <Button
          style={{
            display: "inline-flex",
            width: "138px",
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
          onClick={handleFindAddressClick}
        >
          주소 찾기
        </Button>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "402px",
            height: "60px",
            borderRadius: "15px",
            border: "2px solid #000",
            boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.10)",
            overflow: "hidden",
            backgroundColor: "transparent",
          }}
        >
          <InputBase
            value={address}
            sx={{
              ml: 1,
              flex: 1,
              fontSize: "24px",
              fontWeight: "bold",
              color: "black",
              textAlign: "right",
              backgroundColor: "transparent",
            }}
          />
        </Paper>
      </Row>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "560px",
          height: "60px",
          borderRadius: "15px",
          border: "2px solid #000",
          boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.10)",
          overflow: "hidden",
          backgroundColor: isListening ? "red" : "transparent",
        }}
      >
        <InputBase
          ref={subAddressInputRef}
          onChange={handleAddressChange}
          value={subAddress}
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
      {isModalVisible && (
        <FindAddressModal modalClose={handleFindAddressClick} />
      )}
    </Colunm>
  );
}
export default AddressForm;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 20px;
`;

const Colunm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  justify-content: center;
  gap: 20px;
`;
