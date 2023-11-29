import styled from "styled-components";

function AudioBtn({ customStyle }) {
  const { color } = customStyle || {};
  return (
    <Btn style={customStyle}>
      <Body style={{color}}>음성 사용 설명서 듣기</Body>
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
