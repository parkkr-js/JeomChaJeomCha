import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const PurchaseBlock = ({ book, id }) => {
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
              재작 재단 | {book.publisher}&nbsp; &nbsp;저자 | {book.author}
              &nbsp; &nbsp;작성년도 | {book.publicationYear}
            </BodyReg>
          </Row>
          <div style={{ height: "25px" }} />
          <ButtonBar>
            <SubTitle>인쇄비 {book.price?.toLocaleString()}원</SubTitle>
          </ButtonBar>
        </Block>
      </Link>
    </div>
  );
};

export default PurchaseBlock;

const Block = styled.div`
  width: 100%;
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
  flex-shrink: 0;
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

const BodyReg = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body1_reg};
  white-space: pre;
`;
