import styled from "styled-components";
import { Tutorial } from "./Tutorial"

function AudioBtn({ customStyle, onFocus, onBlur }) {
  const { color } = customStyle || {};

  const handleAudioBtnClick = () => {
    const speech = new SpeechSynthesisUtterance(Tutorial);
    speech.lang = "ko-KR";
    window.speechSynthesis.speak(speech);
  };
  return (
    <Btn
      onClick={handleAudioBtnClick}
      onFocus={onFocus}
      onBlur={onBlur}
      style={customStyle}
    >
      <Body style={{ color }}>점차점차 사용 설명서</Body>
    </Btn>
  );
}
export default AudioBtn;

const Btn = styled.button`
  display: inline-flex;
  width: 207px;
  height: 40px;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1.5px solid ${({ theme }) => theme.colors.white};
  background-color: transparent;
`;

const Body = styled.div`
  color: ${({ theme }) => theme.colors.white};
  /* font-family: "Nanum Gothic", serif; */
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;
