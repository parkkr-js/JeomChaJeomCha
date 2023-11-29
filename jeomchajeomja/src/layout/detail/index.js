import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import BookIndex from "./components/BookIndex";
import BookIntroduction from "./components/BookIntroduction";
import BookInformation from "./components/BookInformation";
import TopNavBar from "../../common/TopNavBar";

const Detail = () => {
  const bookLists = useSelector((state) => state.book.book);
  const { id } = useParams();
  const ref = useRef(null);
  const [book, setBook] = useState();

  useEffect(() => {
    ref.current?.focus();
    setBook(bookLists.find((item) => item.title === id));
  }, [bookLists, id]);

  return (
    <Column>
      <TopNavBar ref={ref} />
      <div style={{ height: "45px" }} />
      <Header>{book?.title}</Header>
      <div style={{ height: "60px" }} />
      <BookInformation book={book} />
      <div style={{ height: "78px" }} />
      <SubTitle>
        원가 : {book?.price.toLocaleString()} 원 + 배송비 : 3,000원
      </SubTitle>
      <div style={{ height: "14px" }} />
      <SubTitle style={{ fontSize: "40px" }}>
        총 금액 : {(book?.price + 3000).toLocaleString()} 원
      </SubTitle>
      <div style={{ height: "40px" }} />
      <ButtonBar>
        <BodyButton style={{ color: "white", backgroundColor: "black" }}>
          ① 구매하기
        </BodyButton>
        <BodyButton>② 장바구니</BodyButton>
        <BodyButton>③ 파일 다운받기</BodyButton>
      </ButtonBar>
      <div style={{ height: "60px" }} />
      <BookIntroduction book={book} />
      <div style={{ height: "40px" }} />
      <BookIndex book={book} />
    </Column>
  );
};

export default Detail;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 25px 240px;
`;

const SubTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
`;

const BodyButton = styled.button`
  padding: 8px 30px;
  white-space: nowrap;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
`;

/* const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body2};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body2_reg};
  white-space: nowrap;
`; */

const Header = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: ${({ theme }) => theme.fontSizes.header1};
  white-space: nowrap;
`;

const ButtonBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  flex-shrink: 0;
`;
