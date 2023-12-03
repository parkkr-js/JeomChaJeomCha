import React from 'react';
import styled from 'styled-components';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.30);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;


const ModalContainer = styled.div`
  width: 560px;
  height: 200px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
`;

function PhoneNumberVerificationModal() {
  return (
    <Backdrop>
      <ModalContainer>
        <p>전화번호 인증에 성공하였습니다.</p> 
      </ModalContainer>
    </Backdrop>
  );
}

export default PhoneNumberVerificationModal;
