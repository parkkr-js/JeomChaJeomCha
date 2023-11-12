import React from "react";
import styled from "styled-components";
import NotFoundImg from "../assets/img/404.png";

function NotFound() {
  return (
    <NotFoundContainer>
      <Header>404 Not Found</Header>
      <Description>
        요청하신 페이지를 찾을 수 없습니다.
        <br />
        입력하신 주소가 정확한지 다시 한번 확인해주세요.
      </Description>
      <NotFoundImage src={NotFoundImg} alt="404 Not Found" />
    </NotFoundContainer>
  );
}

export default NotFound;

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  text-align: center;
`;

const Header = styled.h1`
  font-family: ${({ theme }) => theme.typography.header1.fontFamily};
  font-weight: ${({ theme }) => theme.typography.header1.fontWeight};
  font-size: ${({ theme }) => theme.typography.header1.fontSize};
  color: ${({ theme }) => theme.colors.black};
`;

const Description = styled.p`
  margin-top: 20px;
`;

const NotFoundImage = styled.img`
  width: auto;
  height: auto;
  border-radius: 50px;
`;
