import React, { useContext, useEffect, useState } from "react";
import TitleBar from "./components/TitleBar";
import EnterSearch from "./components/EnterSearch";
import styled from "styled-components";
import BookBlock from "./components/BookBlock";
import magnifyingGlass from "../../img/magnifying_glass.svg";
import { SearchContext } from "../../model/SearchProvider";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ResultContext } from "../../model/ResultProvider";

const SearchResult = () => {
  const bookLists = useSelector((state) => state.book.book);
  const [result, setResult] = useContext(ResultContext);
  const [keyword] = useContext(SearchContext);
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [isFocusing, setIsFocusing] = useState(false);
  const { transcript, resetTranscript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();

  useEffect(() => {
    setResult(
      bookLists.filter(
        (book) =>
          book.title.includes(keyword) ||
          book.author.includes(keyword) ||
          book.subject.includes(keyword)
      )
    );
  }, [bookLists, keyword]);

  useEffect(() => {
    let startTimer;

    const handleKeyDown = (event) => {
      if (event.key === " " && !isListening && !startTimer) {
        // 스페이스바 누른 상태로 0.2초를 누르면 딱 작동
        startTimer = setTimeout(() => {
          playBeep();
          setIsListening(true);
          SpeechRecognition.startListening();
          startTimer = null; // 타이머 초기화
        }, 200);
      } else if (event.key === "1" && !isFocusing) {
        if (result.length > 0) navigate(`./${result[0].id}`);
      } else if (event.key === "2" && !isFocusing) {
        if (result.length > 1) navigate(`./${result[1].id}`);
      } else if (event.key === "3" && !isFocusing) {
        if (result.length > 2) navigate(`./${result[2].id}`);
      } else if (event.key === "4" && !isFocusing) {
        if (result.length > 3) navigate(`./${result[3].id}`);
      } else if (event.key === "5" && !isFocusing) {
        if (result.length > 4) navigate(`./${result[4].id}`);
      } else if (event.key === "6" && !isFocusing) {
        if (result.length > 5) navigate(`./${result[5].id}`);
      } else if (event.key === "7" && !isFocusing) {
        if (result.length > 6) navigate(`./${result[6].id}`);
      } else if (event.key === "8" && !isFocusing) {
        if (result.length > 7) navigate(`./${result[7].id}`);
      } else if (event.key === "9" && !isFocusing) {
        if (result.length > 8) navigate(`./${result[8].id}`);
      }
    };

    const handleKeyUp = (event) => {
      if (event.key === " ") {
        // 스페이스바를 뗄 때 타이머 취소 => 입력 정상작동
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
      oscillator.type = "sine";
      oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
      oscillator.connect(audioContext.destination);
      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.6);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
      if (startTimer) {
        clearTimeout(startTimer); // 컴포넌트 언마운트 시 타이머 취소
      }
    };
  }, [isListening, isFocusing]);

  if (!browserSupportsSpeechRecognition) {
    return (
      <span>
        죄송합니다. 음성인식을 지원하지 않는 브라우저입니다.
        <br /> 크롬브라우저를 사용해주세요.
      </span>
    );
  }

  return (
    <Column>
      <TitleBar />
      <EnterSearch
        transcript={transcript}
        isListening={isListening}
        setResult={setResult}
        bookLists={bookLists}
        setIsFocusing={setIsFocusing}
      />
      <div style={{ height: "75px" }} />
      {result.length === 0 ? (
        <>
          <img src={magnifyingGlass} alt="돋보기 아이콘" />
          <div style={{ height: "24px" }} />
          <SubTitleReg>‘{keyword}’에 맞는 검색 결과가 없습니다</SubTitleReg>
          <div style={{ height: "120px" }} />
        </>
      ) : (
        <Column style={{ alignItems: "flex-start" }}>
          <SubTitle style={{ margin: "0 240px 8px" }}>
            "{keyword}" 검색 결과 총 {result.length}건
          </SubTitle>
          {result.map((book, i) => (
            <>
              <BookBlock book={book} id={i} />
              <div style={{ height: "20px" }} />
            </>
          ))}
        </Column>
      )}
      <div style={{ height: "80px" }} />
      <BodyReg>찾으시는 자료가 없다면, 새로 신청할 수 있습니다. </BodyReg>
      <div style={{ height: "12px" }} />
      <Button>학습자료 신청하기</Button>
      <div style={{ height: "50px" }} />
    </Column>
  );
};

export default SearchResult;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const Button = styled.button`
  padding: 9px 25px;
  white-space: nowrap;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.button1};
  font-size: ${({ theme }) => theme.fontSizes.button1};
`;

const SubTitleReg = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1_reg};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  white-space: nowrap;
  margin: 0 auto;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: 25px;
  white-space: nowrap;
  margin: 0 auto;
`;

const BodyReg = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1_reg};
  white-space: nowrap;
  margin: 0 auto;
`;
