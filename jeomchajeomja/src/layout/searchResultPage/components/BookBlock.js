import React, { useContext } from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../../../features/shoppingCart/shoppingCartSlice";
import { PurchaseContext } from "../../../model/PurchaseProvider";

const BookBlock = ({ book, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [, setPurchase] = useContext(PurchaseContext);

  const handleShoppingCartClick = (event) => {
    event.preventDefault();
    dispatch(addCart(book));
    alert("장바구니에 추가되었습니다.");
  };

  const handlePurchaseClick = (event) => {
    event.preventDefault();
    setPurchase(book);
    navigate("/purchase/false");
  };

  return (
    <div style={{ width: "100vw", padding: "0 240px" }}>
      <Link
        to={`/search/${book.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Block>
          <Row>
            <Circle>
              <Body style={{ color: "black" }}>{id + 1}</Body>
            </Circle>
            <div style={{ width: "24px" }} />
            <Body style={{ fontSize: "30px" }}>{book.title}</Body>
          </Row>
          <div style={{ height: "8px" }} />
          <Row>
            <div style={{ width: "60px" }} />
            <BodyReg>
              과목 | {book.subject}&nbsp; &nbsp;발행일 | {book.publishDate}
              &nbsp; &nbsp;저자 | {book.author}
            </BodyReg>
          </Row>
          <div style={{ height: "25px" }} />
          <ButtonBar>
            <Button
              style={{ color: "white", background: "black" }}
              onClick={handleShoppingCartClick}
            >
              장바구니
            </Button>
            <Button onClick={handlePurchaseClick}>구매하기</Button>
          </ButtonBar>
        </Block>
      </Link>
    </div>
  );
};

export default BookBlock;

const Block = styled.div`
  width: 100%;
  height: 220px;
  flex-shrink: 0;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.black};
  padding: 25px 30px;
  overflow: hidden;
  margin: 0 auto;
`;

const ButtonBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
  flex-shrink: 0;
`;

const Button = styled.button`
  padding: 9px 25px;
  white-space: nowrap;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.button1};
  font-size: ${({ theme }) => theme.fontSizes.button1};
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.white};
  flex-shrink: 0;
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  white-space: nowrap;
`;

const BodyReg = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body1_reg};
  white-space: nowrap;
`;
