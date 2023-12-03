import React from "react";
import styled from "styled-components";

const BookIndex = ({ book }) => {
  return (
    <>
      <Title>목차</Title>
      <div style={{ height: "40px" }} />
      <BigIndex>{book?.bigIndex[0]}</BigIndex>
      <div style={{ height: "15px" }} />
      <SmallContent>
        {book?.smallIndex[0].split("\n").map((line) => {
          return (
            <>
              {line}
              <br />
            </>
          );
        })}
      </SmallContent>
      <div style={{ height: "35px" }} />
      <BigIndex>{book?.bigIndex[1]}</BigIndex>
      <div style={{ height: "15px" }} />
      <SmallContent>
        {book?.smallIndex[1].split("\n").map((line) => {
          return (
            <>
              {line}
              <br />
            </>
          );
        })}
      </SmallContent>
      <div style={{ height: "35px" }} />
      <BigIndex>{book?.bigIndex[2]}</BigIndex>
      <div style={{ height: "15px" }} />
      <SmallContent>
        {book?.smallIndex[2].split("\n").map((line) => {
          return (
            <>
              {line}
              <br />
            </>
          );
        })}
      </SmallContent>
    </>
  );
};

export default BookIndex;

const Title = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: 25px;
  border-top: 2px solid black;
  border-bottom: 2px solid black;
  text-align: center;
  padding: 10px 0;
`;

const BigIndex = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
`;

const SmallContent = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.button1_reg};
  font-size: ${({ theme }) => theme.fontSizes.button1};
`;
