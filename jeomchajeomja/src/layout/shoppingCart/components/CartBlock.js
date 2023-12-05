import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Delete from "../../../img/icomoon-free_bin.svg";
import { useDispatch } from "react-redux";
import { removeCart } from "../../../features/shoppingCart/shoppingCartSlice";

const CartBlock = ({ book, id, focusRef }) => {
  const dispatch = useDispatch();

  const handleDeleteClick = () => {
    dispatch(removeCart(id));
  };

  return (
    <Row>
      <Block>
        <Link
          to={`/search/${book.id}`}
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <Row>
            <Circle>
              <Body
                style={{ color: "black" }}
                tabIndex={0}
                ref={(ref) => (focusRef.current[8 + id * 4 - 3] = ref)}
              >
                {id + 1}
              </Body>
            </Circle>
            <div style={{ width: "24px" }} />
            <SubTitle
              tabIndex={0}
              ref={(ref) => (focusRef.current[8 + id * 4 - 2] = ref)}
            >
              {book.title}
            </SubTitle>
          </Row>
          <div style={{ height: "8px" }} />
          <Row
            tabIndex={0}
            ref={(ref) => (focusRef.current[8 + id * 4 - 1] = ref)}
          >
            <div style={{ width: "60px" }} />
            <BigBody>과목</BigBody>
            <div
              style={{
                borderLeft: "1px solid white",
                height: "20px",
                margin: "9px 14px",
              }}
            />
            <BigBodyReg>{book.subject}&nbsp; &nbsp;</BigBodyReg>
            <BigBody>발행일</BigBody>
            <div
              style={{
                borderLeft: "1px solid white",
                height: "20px",
                margin: "9px 14px",
              }}
            />
            <BigBodyReg>{book.publishDate}&nbsp; &nbsp;</BigBodyReg>
            <BigBody>저자</BigBody>
            <div
              style={{
                borderLeft: "1px solid white",
                height: "20px",
                margin: "9px 14px",
              }}
            />
            <BigBodyReg>{book.author}</BigBodyReg>
          </Row>
        </Link>
      </Block>
      <DeleteButton
        onClick={handleDeleteClick}
        tabIndex={0}
        ref={(ref) => (focusRef.current[8 + id * 4] = ref)}
      >
        <Column>
          <img src={Delete} alt="삭제 버튼" />
          <div style={{ height: "16px" }} />
          삭제
        </Column>
      </DeleteButton>
    </Row>
  );
};

export default CartBlock;

const Block = styled.div`
  width: 88%;
  height: 140px;
  flex-shrink: 0;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.black};
  padding: 25px 30px;
  overflow: hidden;
  z-index: 2;
`;

const DeleteButton = styled.button`
  padding: 32px;
  width: 100%;
  height: 140px;
  white-space: nowrap;
  border-radius: 0 20px 20px 0;
  border: 2px solid red;
  background-color: red;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.button1};
  font-size: ${({ theme }) => theme.fontSizes.button1};
  text-align: end;
  margin-left: -20px;
  z-index: 1;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  margin-left: 10px;
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  font-size: ${({ theme }) => theme.fontSizes.body1};
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

const SubTitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  white-space: nowrap;
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  white-space: nowrap;
`;

const BigBody = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  white-space: nowrap;
`;

const BigBodyReg = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body1_reg};
  white-space: nowrap;
`;
