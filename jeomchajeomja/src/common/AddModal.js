import React from "react";
import styled from "styled-components";
import { Modal } from "@mui/material";

const AddModal = ({ isOpen, setIsOpen, text }) => {
  const handleFocus = (event) => {
    const text = event.target.innerText;
    const speech = new SpeechSynthesisUtterance();
    speech.lang = "ko-KR";
    speech.text = text;
    window.speechSynthesis.speak(speech);
  };

  const handleBlur = () => {
    window.speechSynthesis.cancel();
  };

  return (
    <ModalComponent open={isOpen} onClose={() => setIsOpen(false)}>
      <Column tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
        <SubTitle>{text}</SubTitle>
      </Column>
    </ModalComponent>
  );
};

export default AddModal;

const ModalComponent = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

const SubTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  white-space: nowrap;
`;
