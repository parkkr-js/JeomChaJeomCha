import React from "react";
import styled from "styled-components";

const BookIntroduction = ({ book, handleFocus, handleBlur }) => {
  return (
    <>
      <Title tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
        책 소개
      </Title>
      <div style={{ height: "40px" }} />
      <BigContent tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
        {book?.bigContent[0]}
      </BigContent>
      <SmallContent tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
        {book?.smallContent[0]}
      </SmallContent>
      <div style={{ height: "35px" }} />
      <BigContent tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
        {book?.bigContent[1]}
      </BigContent>
      <SmallContent tabIndex={0} onFocus={handleFocus} onBlur={handleBlur}>
        {book?.smallContent[1]}
      </SmallContent>
    </>
  );
};

export default BookIntroduction;

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

const BigContent = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.button1};
  font-size: ${({ theme }) => theme.fontSizes.button1};
`;

const SmallContent = styled.div`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.button1_reg};
  font-size: ${({ theme }) => theme.fontSizes.button1};
`;
