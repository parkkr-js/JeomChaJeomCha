import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CompleteBlock = ({ book, id }) => {
  return (
    <div style={{ width: "100vw", padding: "0 340px" }}>
      <Link
        to={`/search/${book.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Block>
          <Row>
            <Body style={{ fontSize: "30px" }}>{book.title}</Body>
          </Row>
          <div style={{ height: "8px" }} />
          <Row>
            <BodyReg>
              과목 | {book.subject}&nbsp; &nbsp;발행일 | {book.publishDate}
              &nbsp; &nbsp;저자 | {book.author}
            </BodyReg>
          </Row>
        </Block>
      </Link>
    </div>
  );
};

export default CompleteBlock;

const Block = styled.div`
  width: 100%;
  flex-shrink: 0;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.black};
  padding: 25px 30px;
  overflow: hidden;
  margin: 0 auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-shrink: 0;
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  white-space: nowrap;
`;

const BodyReg = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body1_reg};
  white-space: pre;
`;
