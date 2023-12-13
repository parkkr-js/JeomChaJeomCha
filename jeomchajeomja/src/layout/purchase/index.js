import React, { useContext, useEffect, useState } from "react";
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
import { AddressState, SubAddressState } from "../../recoil/atoms/AddressState";

const Purchase = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book] = useContext(PurchaseContext);
  const purchase = useSelector((state) => state.shoppingCart.shoppingCart);
  const [isDisabled, setIsDisabled] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [address, setAddress] = useRecoilState(AddressState);
  const [subAddress, setSubAddress] = useRecoilState(SubAddressState);
  const totalPrice =
    id === "true"
      ? purchase.reduce((accumulator, item) => {
          return accumulator + item.price;
        }, 0)
      : book.price;

  const handleConditionChange = () => {
    setIsDisabled(!isDisabled);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubAddressChange = (event) => {
    setSubAddress(event.target.value);
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
      if (event.key >= "1" && event.key <= "9" && isDisabled) {
        const int = parseInt(event.key, 10);
        if (purchase.length > int - 1)
          navigate(`/search/${purchase[int - 1].id}`);
      }

      if (event.key === "2") {
        handleConditionChange();
      } else if (event.key === "3") {
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isDisabled, navigate, purchase]);

  return (
    <Column>
      <TopNavBar handleFocus={handleFocus} handleBlur={handleBlur} />
      <div style={{ height: "45px" }} />
      <Header tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
        구매하기
      </Header>
      <div style={{ height: "50px" }} />
      <Row>
        <SubTitle tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
          자료 확인
        </SubTitle>
      </Row>
      <div style={{ height: "20px" }} />
      {id === "true" ? (
        purchase.map((item, i) => {
          return (
            <>
              <PurchaseBlock
                book={item}
                id={i + 1}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
              />
              <div style={{ height: "15px" }} />
            </>
          );
        })
      ) : (
        <>
          <PurchaseBlock
            book={book}
            id={1}
            handleFocus={handleFocus}
            handleBlur={handleBlur}
          />
          <div style={{ height: "15px" }} />
        </>
      )}
      <div style={{ height: "25px" }} />
      <Row>
        <SubTitle tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
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
            value={address}
            onChange={handleAddressChange}
            sx={{
              ml: 1,
              flex: 1,
              fontSize: "24px",
              fontWeight: "bold",
              padding: "9px 0",
              color: "black",
              textAlign: "right",
            }}
          />
        </Paper>
        <div style={{ width: "29px" }} />
        <EditButton
          onClick={handleConditionChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
        >
          ② {isDisabled ? "수정하기" : "완료"}
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
          value={subAddress}
          onChange={handleSubAddressChange}
          sx={{
            ml: 1,
            flex: 1,
            fontSize: "24px",
            fontWeight: "bold",
            color: "black",
            padding: "9px 0",
            textAlign: "right",
          }}
        />
      </Paper>
      <div style={{ height: "40px" }} />
      <Row>
        <SubTitle tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
          금액 확인
        </SubTitle>
      </Row>
      <div style={{ height: "23px" }} />
      <Row tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
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
        onFocus={handleFocus}
        onBlur={handleBlur}
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
        onFocus={handleFocus}
        onBlur={handleBlur}
      >
        ③ 구매하기
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
