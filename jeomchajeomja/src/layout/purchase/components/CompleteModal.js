import Modal from "@mui/material/Modal";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const CompleteModal = ({ isModalOpen, setIsModalOpen, handleCancelClick }) => {
  const navigate = useNavigate();
  const [reRender, setReRender] = useState(false);
  const focusRef = useRef([]);
  const [textContent, setTextContent] = useState("");

  const handleCompleteClick = () => {
    setIsModalOpen(false);
    handleCancelClick();
    navigate("./complete");
  };

  useEffect(() => {
    setReRender(true);
  }, []);

  useEffect(() => {
    const handleFocus = (index) => {
      setTextContent(focusRef.current[index].textContent);
    };

    focusRef.current.forEach((ref, index) => {
      ref.addEventListener("focus", () => handleFocus(index));
    });

    return () => {
      const currentRef = focusRef.current; // 현재 값 저장
      currentRef.forEach((ref, index) => {
        if (ref !== null)
          ref.removeEventListener("focus", () => handleFocus(index));
      });
    };
  }, [reRender]);

  useEffect(() => {
    if (textContent !== "") {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = "ko-KR";
      speech.text = textContent;
      window.speechSynthesis.speak(speech);
    }
  }, [textContent]);

  return (
    <ModalComponent open={isModalOpen} onClose={() => setIsModalOpen(false)}>
      <Column>
        <Div>
          <Header
            tabIndex={0}
            ref={(ref) => (focusRef.current[0] = ref)}
            style={{ color: "white" }}
          >
            결제하기
          </Header>
        </Div>
        <ModalBody>
          <Header tabIndex={0} ref={(ref) => (focusRef.current[1] = ref)}>
            앱으로 이동하여
            <br />
            결제를 진행해 주세요.
          </Header>
          <Row>
            <ModalButton
              ref={(ref) => (focusRef.current[2] = ref)}
              onClick={handleCompleteClick}
            >
              결제 완료
            </ModalButton>
          </Row>
        </ModalBody>
      </Column>
    </ModalComponent>
  );
};

export default CompleteModal;

const ModalComponent = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  border-radius: 20px;
  width: 810px;
  height: 670px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

const ModalBody = styled.div`
  padding: 40px 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 540px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ModalButton = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 9px 20px;
  border-radius: 15px;
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  height: 71px;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 34px 40px 20px;
`;

const Header = styled.button`
  border: none;
  background-color: transparent;
  line-height: 150%;
  font-family: "Nanum Gothic";
  text-align: start;
  padding: 0;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: ${({ theme }) => theme.fontSizes.header1};
  white-space: nowrap;
`;
