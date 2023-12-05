import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TopNavBar from "../../common/TopNavBar";
import CartBlock from "./components/CartBlock";
import { useDispatch, useSelector } from "react-redux";
import { removeAllCart } from "../../features/shoppingCart/shoppingCartSlice";
import { useNavigate } from "react-router-dom";
import AddModal from "../../common/AddModal";
import { PurchaseContext } from "../../model/PurchaseProvider";

const ShoppingCart = () => {
  const [textContent, setTextContent] = useState("");
  const [reading, setReading] = useState(false);
  const focusRef = useRef([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [, setPurchase] = useContext(PurchaseContext);
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);

  const handleRemoveClick = () => {
    dispatch(removeAllCart());
    setIsOpen(true);
    setTimeout(() => setIsOpen(false), 1000);
  };

  const handlePurchaseClick = () => {
    navigate("/purchase/true");
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key >= "1" && event.key <= "9") {
        const int = parseInt(event.key, 10);
        if (shoppingCart.length > int - 1) {
          setPurchase(shoppingCart[int - 1]);
          navigate("/purchase/false");
        }
      } else if (event.key === "Tab" && reading) {
        window.speechSynthesis.cancel();
        setReading(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [navigate, setPurchase, shoppingCart, reading]);

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
      speech.addEventListener("end", () => {
        setReading(false);
      });

      window.speechSynthesis.speak(speech);
      setReading(true);
    }
  }, [textContent]);

  return (
    <Column ref={(ref) => (focusRef.current[0] = ref)}>
      <TopNavBar focusRef={focusRef} />
      <div style={{ height: "45px" }} />
      <Header tabIndex={0} ref={(ref) => (focusRef.current[6] = ref)}>
        장바구니
      </Header>
      <div style={{ height: "10px" }} />
      <SubTitleReg tabIndex={0} ref={(ref) => (focusRef.current[7] = ref)}>
        선택 구매를 위해선 control키를 누른 상태로 해당 번호를 입력해주세요.
      </SubTitleReg>
      <div style={{ height: "56px" }} />
      <SubTitle tabIndex={0} ref={(ref) => (focusRef.current[8] = ref)}>
        장바구니 자료 확인
      </SubTitle>
      <div style={{ height: "20px" }} />
      {shoppingCart.length === 0 ? (
        <Column
          style={{
            padding: "100px 0 60px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header
            style={{ fontSize: "35px" }}
            tabIndex={0}
            ref={(ref) => (focusRef.current[9] = ref)}
          >
            장바구니가 비었습니다.
          </Header>
          <div style={{ height: "15px" }} />
          <SubTitleReg tabIndex={0} ref={(ref) => (focusRef.current[10] = ref)}>
            교재를 장바구니에 담은 후에 이용해주시기 바랍니다.
          </SubTitleReg>
        </Column>
      ) : (
        shoppingCart.map((book, i) => {
          return (
            <>
              <CartBlock book={book} id={i} focusRef={focusRef} />
              <div style={{ height: "10px" }} />
            </>
          );
        })
      )}
      <div style={{ height: "90px" }} />
      <ButtonBar>
        <Button
          disabled={shoppingCart.length === 0}
          style={
            shoppingCart.length === 0
              ? {
                  opacity: "0.2",
                  color: "black",
                  backgroundColor: "white",
                  cursor: "not-allowed",
                }
              : { color: "black", backgroundColor: "white" }
          }
          ref={
            shoppingCart.length === 0
              ? (ref) => (focusRef.current[11] = ref)
              : (ref) => (focusRef.current[9 + shoppingCart.length * 4] = ref)
          }
          onClick={handleRemoveClick}
        >
          전체 삭제하기
        </Button>
        <AddModal
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          text={"삭제되었습니다."}
        />
        <Button
          disabled={shoppingCart.length === 0}
          style={
            shoppingCart.length === 0
              ? { opacity: "0.2", cursor: "not-allowed" }
              : {}
          }
          ref={
            shoppingCart.length === 0
              ? (ref) => (focusRef.current[12] = ref)
              : (ref) => (focusRef.current[10 + shoppingCart.length * 4] = ref)
          }
          onClick={handlePurchaseClick}
        >
          전체 구매하기
        </Button>
      </ButtonBar>
    </Column>
  );
};

export default ShoppingCart;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 25px 240px;
`;

const Header = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: 40px;
  white-space: nowrap;
`;

const SubTitleReg = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1_reg};
  font-size: 25px;
  white-space: nowrap;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: 25px;
  white-space: nowrap;
`;

const ButtonBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 36px;
  flex-shrink: 0;
  width: 100%;
`;

const Button = styled.button`
  padding: 12px 28px;
  white-space: nowrap;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
`;
