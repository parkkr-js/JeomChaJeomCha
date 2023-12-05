import React, { useContext, useEffect, useRef, useState } from "react";
import TopNavBar from "../../common/TopNavBar";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PurchaseContext } from "../../model/PurchaseProvider";
import PurchaseBlock from "./components/PurchaseBlock";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import StyledModal from "./components/StyledModal";
import { useRecoilState } from "recoil";
import { AddressState } from "../../recoil/atoms/AddressState";

const Purchase = () => {
  const focusRef = useRef([]);
  const [textContent, setTextContent] = useState("");
  const [reading, setReading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [book] = useContext(PurchaseContext);
  const purchase = useSelector((state) => state.shoppingCart.shoppingCart);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useRecoilState(AddressState);
  const totalPrice =
    id === "true"
      ? purchase.reduce((accumulator, item) => {
          return accumulator + item.price;
        }, 0)
      : book.price;

  const handleConditionChange = () => {
    setIsDisabled(!isDisabled);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key >= "1" && event.key <= "9" && isDisabled) {
        const int = parseInt(event.key, 10);
        if (purchase.length > int - 1)
          navigate(`/search/${purchase[int - 1].id}`);
      }

      if (event.key === "Tab" && reading) {
        window.speechSynthesis.cancel();
        setReading(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDisabled, navigate, purchase, reading]);

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
        구매하기
      </Header>
      <div style={{ height: "50px" }} />
      <Row>
        <SubTitle tabIndex={0} ref={(ref) => (focusRef.current[7] = ref)}>
          자료 확인
        </SubTitle>
      </Row>
      <div style={{ height: "20px" }} />
      {id === "true" ? (
        purchase.map((item, i) => {
          return (
            <>
              <PurchaseBlock book={item} id={i + 1} focusRef={focusRef} />
              <div style={{ height: "15px" }} />
            </>
          );
        })
      ) : (
        <>
          <PurchaseBlock book={book} id={1} focusRef={focusRef} />
          <div style={{ height: "15px" }} />
        </>
      )}
      <div style={{ height: "25px" }} />
      <Row>
        <SubTitle
          tabIndex={0}
          ref={(ref) =>
            id === "true"
              ? (focusRef.current[8 + purchase.length * 4] = ref)
              : (focusRef.current[12] = ref)
          }
        >
          배송지 확인
        </SubTitle>
      </Row>
      <div style={{ height: "28px" }} />
      <Row>
        <Paper
          component="form"
          style={isDisabled ? { backgroundColor: "lightGray" } : {}}
          sx={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            borderRadius: "15px",
            border: "2px solid #000000",
            overflow: "hidden",
          }}
        >
          <InputBase
            disabled={isDisabled}
            sx={{
              ml: 1,
              flex: 1,
              fontSize: "20px",
              padding: "9px 18px",
              color: "black",
              textAlign: "right",
            }}
          />
        </Paper>
        <div style={{ width: "29px" }} />
        <EditButton
          onClick={handleConditionChange}
          ref={(ref) =>
            id === "true"
              ? (focusRef.current[9 + purchase.length * 4] = ref)
              : (focusRef.current[13] = ref)
          }
        >
          {isDisabled ? "수정하기" : "완료"}
        </EditButton>
      </Row>
      <div style={{ height: "10px" }} />
      <Paper
        component="form"
        style={isDisabled ? { backgroundColor: "lightGray" } : {}}
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          borderRadius: "15px",
          border: "2px solid #000000",
          overflow: "hidden",
        }}
      >
        <InputBase
          disabled={isDisabled}
          sx={{
            ml: 1,
            flex: 1,
            fontSize: "20px",
            padding: "9px 18px",
            color: "black",
            textAlign: "right",
          }}
        />
      </Paper>
      <div style={{ height: "40px" }} />
      <Row>
        <SubTitle
          tabIndex={0}
          ref={(ref) =>
            id === "true"
              ? (focusRef.current[10 + purchase.length * 4] = ref)
              : (focusRef.current[14] = ref)
          }
        >
          금액 확인
        </SubTitle>
      </Row>
      <div style={{ height: "23px" }} />
      <Row
        tabIndex={0}
        ref={(ref) =>
          id === "true"
            ? (focusRef.current[11 + purchase.length * 4] = ref)
            : (focusRef.current[15] = ref)
        }
      >
        <BodyReg>인쇄비</BodyReg>
        <div style={{ width: "24px" }} />
        <Body>{totalPrice?.toLocaleString()}원</Body>
        <div style={{ width: "50px" }} />
        <Header>+</Header>
        <div style={{ width: "33px" }} />
        <BodyReg>배송비</BodyReg>
        <div style={{ width: "24px" }} />
        <Body>3,000원</Body>
        <div style={{ width: "50px" }} />
        <Header>+</Header>
        <div style={{ width: "33px" }} />
        <BodyReg>수수료</BodyReg>
        <div style={{ width: "24px" }} />
        <Body>{(totalPrice / 10)?.toLocaleString()}원</Body>
      </Row>
      <div style={{ width: "15px" }} />
      <hr style={{ width: "100%", borderColor: "black" }} />
      <div style={{ width: "15px" }} />
      <Row
        style={{ justifyContent: "flex-end" }}
        tabIndex={0}
        ref={(ref) =>
          id === "true"
            ? (focusRef.current[12 + purchase.length * 4] = ref)
            : (focusRef.current[16] = ref)
        }
      >
        <Header>=</Header>
        <div style={{ width: "33px" }} />
        <SubTitle>총 금액</SubTitle>
        <div style={{ width: "24px" }} />
        <SubTitle>{(totalPrice * 1.1 + 3000)?.toLocaleString()}원</SubTitle>
      </Row>
      <div style={{ height: "47px" }} />
      <PurchaseButton
        onClick={() => setIsOpen(true)}
        tabIndex={0}
        ref={(ref) =>
          id === "true"
            ? (focusRef.current[13 + purchase.length * 4] = ref)
            : (focusRef.current[17] = ref)
        }
      >
        구매하기
      </PurchaseButton>
      {isOpen && <StyledModal isOpen={isOpen} setIsOpen={setIsOpen} />}
    </Column>
  );
};

export default Purchase;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 25px 240px;
`;

const Header = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: 40px;
  white-space: nowrap;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
  width: 100%;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: 25px;
  white-space: nowrap;
`;

const EditButton = styled.button`
  padding: 9px 20px;
  white-space: nowrap;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
`;

const BodyReg = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1_reg};
  white-space: nowrap;
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  white-space: nowrap;
`;

const PurchaseButton = styled.button`
  padding: 12px 28px;
  white-space: nowrap;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
`;
