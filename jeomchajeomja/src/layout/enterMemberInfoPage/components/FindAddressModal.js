import React from "react";
import styled from "styled-components";

function FindAddressModal() {
  return (
    <Backdrop>
      <ModalContainer>
        <ModalHeaderDiv>
          <ModalHeader>주소 찾기</ModalHeader>
          <ModalBody>
            서울시 서초구 12가길 남부순환로 내 우편번호가 없어 정확한 정보가
            필요합니다.
            <br />
            다음과 같은 조항으로 검색을 해서 더욱 정확한 결과가 검색됩니다.
            <br />
            도로명 + 건물번호 예) 판교역로 135
            <br />
            지역명 + 번지 또는 건물명 예) 남동구아이파크
          </ModalBody>
        </ModalHeaderDiv>

        <InputWrapper>
          <ModalInput placeholder="검색" />
          <SearchButton>검색</SearchButton>
        </InputWrapper>
        <CloseButton>닫기</CloseButton>
      </ModalContainer>
    </Backdrop>
  );
}

export default FindAddressModal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

const ModalContainer = styled.div`
  width: 960px;
  height: 700px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  padding: 0;
`;

const ModalHeaderDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: baseline;
  align-items: start;
  padding: 34px 40px 20px 40px;
  width: 100%;
  height: 258px;
  border-radius: 20px 20px 0 0;
  background-color: ${({ theme }) => theme.colors.black};
`;

const ModalHeader = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 50px;
  font-style: normal;
  font-weight: 700;
  line-height: 75px;
`;

const ModalBody = styled.body`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.5;
`;

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px; 
`;

const ModalInput = styled.input`
  width: 80%; 
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1em;
`;

const SearchButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #000;
  color: #fff;
  font-size: 1em;
  cursor: pointer;
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  background-color: #ccc;
  color: #333;
  font-size: 1em;
  cursor: pointer;
  align-self: center; 
`;