import React, { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import NavBar from "../../common/NavBar";
import { Button } from "./components/Button";
import Search from "./components/Search";
import TtsTest from "../ttsTest";
import { Link, useNavigate } from "react-router-dom";
import { SearchContext } from "../../model/SearchProvider";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function Home() {
  const keyWords = ["초등저학", "초등고학", "중등", "고등"];
  const [keyword, setKeyword] = useContext(SearchContext);
  const navigate = useNavigate();

  const handleButtonClick = (event, keyWordText) => {
    event.preventDefault();
    setKeyword(keyWordText);
    navigate("/search");
  };

  const [isListening, setIsListening] = useState(false);
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    const handleKeyDown = (event) => {
      // event.preventDefault();
      if (event.key === " " && !isListening) {
        playBeep();
        setIsListening(true);
        SpeechRecognition.startListening();
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
    <>
      <NavBar />
      <Line />
      <Div>
        <Row>
          <Header>학습자료 검색</Header>
          <Body>해당 학년 혹은 교재명과 같은 키워드를 입력해주세요.</Body>
        </Row>
        <Body>스페이스바를 누르는 동안 음성 검색이 활성화됩니다.</Body>
        <div>
          {/* <p>
            Microphone: {isListening ? <LoadingAnimation /> : "off"}
          </p> */}
          <button onClick={resetTranscript}>Reset</button>
          <p>{transcript}</p>
        </div>
        <Search transcript={transcript} isListening={isListening} />
        <Space />
        <Header>키워드 검색</Header>
        <ButtonContainer>
          {keyWords.map((keyWordText, index) => (
            <Link
              to="/search"
              onClick={(event) => handleButtonClick(event, keyWordText)}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button key={index}>
                <span>{index + 1}</span>
                <span>{keyWordText}</span>
              </Button>
            </Link>
          ))}
        </ButtonContainer>
        <TtsTest />
      </Div>
    </>
  );
}

export default Home;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  width: 1200px;
  flex-shrink: 0;
  align-items: start;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: baseline;
  width: fit-content;
  gap: 20px;
`;

const Header = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.header1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  line-height: 150%;
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  padding-bottom: 36px;
  line-height: 150%;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 1200px;
  height: fit-content;
  margin-bottom: 80px;
  margin-top: 36px;
`;

const Line = styled.div`
  width: 100%;
  margin-top: 19px;
  margin-bottom: 50px;
  height: 2px;
  background-color: ${({ theme }) => theme.colors.black};
`;

const Space = styled.div`
  width: 100%;
  height: 70px;
`;
