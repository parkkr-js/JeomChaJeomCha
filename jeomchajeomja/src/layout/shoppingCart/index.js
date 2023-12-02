import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import TopNavBar from "../../common/TopNavBar";
import CartBlock from "./components/CartBlock";
import { useDispatch, useSelector } from "react-redux";
import { removeAllCart } from "../../features/shoppingCart/shoppingCartSlice";
import { useNavigate } from "react-router-dom";

const ShoppingCart = () => {
  const ref = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const shoppingCart = useSelector((state) => state.shoppingCart.shoppingCart);

  const handleRemoveClick = () => {
    dispatch(removeAllCart());
    alert("삭제되었습니다.");
  };

  const handlePurchaseClick = () => {
    navigate("/purchase/true");
  };

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Column>
      <TopNavBar ref={ref} />
      <div style={{ height: "45px" }} />
      <Header>장바구니</Header>
      <div style={{ height: "10px" }} />
      <SubTitleReg>
        선택 구매를 위해선 ctrl(command)키를 누른 상태로 해당 번호를
        입력해주세요.
      </SubTitleReg>
      <div style={{ height: "56px" }} />
      <SubTitle>장바구니 자료 확인</SubTitle>
      <div style={{ height: "20px" }} />
      {shoppingCart.length === 0 ? (
        <Column
          style={{
            padding: "100px 0 60px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Header style={{ fontSize: "35px" }}>장바구니가 비었습니다.</Header>
          <div style={{ height: "15px" }} />
          <SubTitleReg>
            교재를 장바구니에 담은 후에 이용해주시기 바랍니다.
          </SubTitleReg>
        </Column>
      ) : (
        shoppingCart.map((book, i) => {
          return (
            <>
              <CartBlock book={book} id={i} />
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
          onClick={handleRemoveClick}
        >
          전체 삭제하기
        </Button>
        <Button
          disabled={shoppingCart.length === 0}
          style={
            shoppingCart.length === 0
              ? { opacity: "0.2", cursor: "not-allowed" }
              : {}
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
