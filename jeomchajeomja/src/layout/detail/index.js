import React, { useContext, useEffect, useRef, useState } from "react";
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
  const focusRef = useRef([]);
  const [textContent, setTextContent] = useState("");
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
    setTimeout(() => setIsOpen(false), 3000);
  };

  const handlePurchaseClick = () => {
    setPurchase(book);
    navigate("/purchase/false");
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
  }, []);

  useEffect(() => {
    if (textContent !== "") {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = "ko-KR";
      speech.text = textContent;
      window.speechSynthesis.speak(speech);
    }
  }, [textContent]);

  return (
    <Column ref={(ref) => (focusRef.current[0] = ref)}>
      <TopNavBar focusRef={focusRef} />
      <div style={{ height: "45px" }} />
      <Header tabIndex={0} ref={(ref) => (focusRef.current[6] = ref)}>
        {book?.title}
      </Header>
      <div style={{ height: "60px" }} />
      <BookInformation focusRef={focusRef} book={book} />
      <div style={{ height: "78px" }} />
      <Row tabIndex={0} ref={(ref) => (focusRef.current[8] = ref)}>
        <SubTitle>인쇄비 : {book?.price.toLocaleString()} 원</SubTitle>
        <Title>+</Title>
        <SubTitle>배송비 : 3,000 원</SubTitle>
      </Row>
      <div style={{ height: "14px" }} />
      <SubTitle
        style={{ fontSize: "40px" }}
        tabIndex={0}
        ref={(ref) => (focusRef.current[9] = ref)}
      >
        총 금액 : {(book?.price + 3000).toLocaleString()} 원
      </SubTitle>
      <div style={{ height: "40px" }} />
      <ButtonBar tabIndex={0} ref={(ref) => (focusRef.current[10] = ref)}>
        <BodyButton
          style={{ color: "white", backgroundColor: "black" }}
          onClick={handlePurchaseClick}
        >
          ① 구매하기
        </BodyButton>
        <BodyButton onClick={handleShoppingCartClick}>② 장바구니</BodyButton>
        <AddModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          text={"장바구니에 추가되었습니다."}
        />
        <BodyButton>③ 파일 다운받기</BodyButton>
      </ButtonBar>
      <div style={{ height: "60px" }} />
      <BookIntroduction focusRef={focusRef} book={book} />
      <div style={{ height: "40px" }} />
      <BookIndex focusRef={focusRef} book={book} />
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
