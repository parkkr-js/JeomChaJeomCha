import React from "react";
import styled from "styled-components";

const BookInformation = ({ book, focusRef }) => {
  return (
    <>
      <Row tabIndex={0} ref={(ref) => (focusRef.current[7] = ref)}>
        <div
          style={{
            borderLeft: "4px solid black",
            height: "180px",
            width: "44px",
          }}
        />
        <Column>
          <Row>
            <SubTitle>과목</SubTitle>
            <SubTitleReg>&nbsp; | &nbsp;{book?.subject}</SubTitleReg>
          </Row>
          <div style={{ height: "20px" }} />
          <Row>
            <SubTitle>발행일</SubTitle>
            <SubTitleReg>&nbsp; | &nbsp;{book?.publishDate}</SubTitleReg>
          </Row>
          <div style={{ height: "20px" }} />
          <Row>
            <SubTitle>번역년도</SubTitle>
            <SubTitleReg>&nbsp; | &nbsp;{book?.translationYear}</SubTitleReg>
          </Row>
        </Column>
        <div
          style={{
            borderLeft: "4px solid black",
            height: "180px",
            width: "44px",
          }}
        />
        <Column>
          <Row>
            <SubTitle>쪽수</SubTitle>
            <SubTitleReg>&nbsp; | &nbsp;{book?.pages}</SubTitleReg>
          </Row>
          <div style={{ height: "20px" }} />
          <Row>
            <SubTitle>저자</SubTitle>
            <SubTitleReg>&nbsp; | &nbsp;{book?.author}</SubTitleReg>
          </Row>
          <div style={{ height: "20px" }} />
          <Row>
            <SubTitle>제작 제단</SubTitle>
            <SubTitleReg>&nbsp; | &nbsp;{book?.publisher}</SubTitleReg>
          </Row>
        </Column>
      </Row>
    </>
  );
};

export default BookInformation;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
  margin: 0 auto;
`;

const SubTitleReg = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1_reg};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  white-space: nowrap;
`;

const SubTitle = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
`;
