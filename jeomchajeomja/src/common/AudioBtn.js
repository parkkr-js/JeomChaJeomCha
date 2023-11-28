import styled from "styled-components";

function AudioBtn() {
  return (
    <AudioBtn>
      <Body>음성 사용 설명서 듣기</Body>
    </AudioBtn>
  );
}
export default AudioBtn;

const Btn = styled.button`
  display: inline-flex;
  padding: 5px 10px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 10px;
  border: 1px solid #fff;
`;

const Body = styled.div`
  color: var(--Background---White, #fff);
  /* font-family: "Nanum Gothic", serif; */
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
`;
