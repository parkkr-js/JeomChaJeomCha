import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import NavBar from "../components/web/NavBar";

function Home() {
  const newBook = useSelector((state) => state.book.book[0]);
  const keyWords = ["점자학습", "초등저학", "초등고학", "중등", "고등"];

  return (
    <div>
      <NavBar />
      <Row>
        {newBook && <BookTitle>{newBook.title}</BookTitle>}
        <NewBook>NewBook</NewBook>
      </Row>
      <ButtonContainer>
        {keyWords.map((keyWordText, index) => (
          <Button key={index}>{keyWordText}</Button>
        ))}
      </ButtonContainer>
    </div>
  );
}

export default Home;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const BookTitle = styled.h2`
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
`;

const NewBook = styled.h0`
  font-weight: ${({ theme }) => theme.fontWeights.header0};
  font-size: ${({ theme }) => theme.fontSizes.header0};
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
  border: none;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  font-size: ${({ theme }) => theme.fontSizes.body1};
`;