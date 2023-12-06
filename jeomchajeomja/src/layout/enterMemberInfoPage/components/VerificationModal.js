import React, { useEffect } from "react";
import styled from "styled-components";

function VerificationModal({ message }) {
  useEffect(() => {
    const utterance = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(utterance);
  }, []);
  return (
    <Backdrop>
      <ModalContainer>
        <Body1>{message}</Body1>
      </ModalContainer>
    </Backdrop>
  );
}

export default VerificationModal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContainer = styled.div`
  width: 560px;
  height: 200px;
  border-radius: 20px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

const Body1 = styled.h1`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  line-height: 150%;
`;
