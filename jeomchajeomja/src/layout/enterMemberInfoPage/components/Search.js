import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "../../home/components/Button";
import React, { useState, useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { AddressState } from "../../../recoil/atoms/AddressState";

function Search({ handleAddressCardList }) {
  const [isListening, setIsListening] = useState(false);
  const [address, setAddress] = useRecoilState(AddressState);
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  const handleAddressChange = (event) => {
    if (!isListening) {
      setAddress(event.target.value);
    }
  };

  useEffect(() => {
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

    if (document) {
      document.addEventListener("keydown", handleKeyDown);
      document.addEventListener("keyup", handleKeyUp);
    }

    return () => {
      if (document) {
        document.removeEventListener("keydown", handleKeyDown);
        document.removeEventListener("keyup", handleKeyUp);
      }
      if (startTimer) {
        clearTimeout(startTimer);
      }
    };
  }, [isListening]);

  useEffect(() => {
    if (isListening && transcript) {
      setAddress(transcript);
    }
  }, [transcript, isListening]);

  useEffect(() => {
    if (address && transcript && !isListening) {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = "ko-KR";
      speech.text = address;
      window.speechSynthesis.speak(speech);
    }
  }, [transcript, isListening]);

  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: "920px",
        height: "74px",
        borderRadius: "20px",
        border: "3px solid #000000",
        overflow: "hidden",
        backgroundColor: isListening ? "red" : "transparent",
      }}
    >
      <InputBase
        value={address}
        onChange={handleAddressChange}
        sx={{
          ml: 1,
          flex: 1,
          fontSize: "24px",
          fontWeight: "bold",
          color: "black",
          textAlign: "right",
          backgroundColor: isListening ? "red" : "transparent",
          border: "none",
        }}
      />

      <Button
        type="button"
        onClick={handleAddressCardList}
        style={{
          display: "inline-flex",
          width: "fit-content",
          height: "auto",
          padding: "9px 25px",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "15px",
          fontSize: "24px",
          fontWeight: 700,
          fontFamily: "NanumGothic",
          fontStyle: "normal",
          lineHeight: "36px",
          margin: "10px",
        }}
      >
        검색
      </Button>
    </Paper>
  );
}
export default Search;
