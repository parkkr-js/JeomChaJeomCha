import React, { useContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import BookIndex from "./components/BookIndex";
import BookIntroduction from "./components/BookIntroduction";
import BookInformation from "./components/BookInformation";
import TopNavBar from "../../common/TopNavBar";
import { PurchaseContext } from "../../model/PurchaseProvider";
import { addCart } from "../../features/shoppingCart/shoppingCartSlice";
import AddModal from "../../common/AddModal";

const Detail = () => {
  const bookLists = useSelector((state) => state.book.book);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const book = bookLists.find((item) => String(item.id) === id);
  const [isOpen, setIsOpen] = useState(false);
  const [, setPurchase] = useContext(PurchaseContext);

  const handleShoppingCartClick = () => {
    dispatch(addCart(book));
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 1500);
  };

  const handlePurchaseClick = () => {
    setPurchase(book);
    navigate("/purchase/false");
  };

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

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "1") {
        handlePurchaseClick();
      } else if (event.key === "2") {
        handleShoppingCartClick();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <Column>
      <TopNavBar handleFocus={handleFocus} handleBlur={handleBlur} />
      <div style={{ height: "45px" }} />
      <Header tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
        {book?.title}
      </Header>
      <div style={{ height: "60px" }} />
      <BookInformation
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        book={book}
      />
      <div style={{ height: "78px" }} />
      <Row tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
        <SubTitle>인쇄비 : {book?.price.toLocaleString()} 원</SubTitle>
        <Title>+</Title>
        <SubTitle>배송비 : 3,000 원</SubTitle>
      </Row>
      <div style={{ height: "14px" }} />
      <SubTitle
        style={{ fontSize: "40px" }}
        tabIndex={0}
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        총 금액 : {(book?.price + 3000).toLocaleString()} 원
      </SubTitle>
      <div style={{ height: "40px" }} />
      <ButtonBar>
        <BodyButton
          style={{ color: "white", backgroundColor: "black" }}
          onClick={handlePurchaseClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          ① 구매하기
        </BodyButton>
        <BodyButton
          onClick={handleShoppingCartClick}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          ② 장바구니
        </BodyButton>
        <AddModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          text={"장바구니에 추가되었습니다."}
        />
        <BodyButton onFocus={handleFocus} onBlur={handleBlur}>
          ③ 파일 다운받기
        </BodyButton>
      </ButtonBar>
      <div style={{ height: "60px" }} />
      <BookIntroduction
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        book={book}
      />
      <div style={{ height: "40px" }} />
      <BookIndex
        handleFocus={handleFocus}
        handleBlur={handleBlur}
        book={book}
      />
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

const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 25px;
`;

const SubTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
`;

const BodyButton = styled.button`
  padding: 12px 30px;
  white-space: nowrap;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
`;

const Title = styled.div`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  white-space: nowrap;
`;

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
