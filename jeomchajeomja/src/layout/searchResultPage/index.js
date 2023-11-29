import React, { useContext, useState } from "react";
import TitleBar from "./components/TitleBar";
import EnterSearch from "./components/EnterSearch";
import styled from "styled-components";
import BookBlock from "./components/BookBlock";
import magnifyingGlass from "../../img/magnifying_glass.svg";
import { SearchContext } from "../../model/SearchProvider";

const SearchResult = () => {
  const [result, setResult] = useState([]);
  const [keyword, setKeyword] = useContext(SearchContext);

  return (
    <Column>
      <TitleBar />
      <EnterSearch
        setResult={setResult}
        keyword={keyword}
        setKeyword={setKeyword}
      />
      <div style={{ height: "75px" }} />
      {result.length === 0 ? (
        <>
          <img src={magnifyingGlass} alt="돋보기 아이콘" />
          <div style={{ height: "24px" }} />
          <SubTitleReg>‘키워드’에 맞는 검색 결과가 없습니다</SubTitleReg>
          <div style={{ height: "120px" }} />
        </>
      ) : (
        <Column style={{ alignItems: "flex-start" }}>
          <SubTitle style={{ margin: "0 240px 8px" }}>
            "{keyword}" 검색 결과 총 {result.length}건
          </SubTitle>
          {result.map((book, i) => (
            <>
              <BookBlock book={book} id={i} />
              <div style={{ height: "20px" }} />
            </>
          ))}
        </Column>
      )}
      <div style={{ height: "80px" }} />
      <BodyReg>찾으시는 자료가 없다면, 새로 신청할 수 있습니다. </BodyReg>
      <div style={{ height: "12px" }} />
      <Button>학습자료 신청하기</Button>
      <div style={{ height: "50px" }} />
    </Column>
  );
};

export default SearchResult;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;

const Button = styled.button`
  padding: 9px 25px;
  white-space: nowrap;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.button1};
  font-size: ${({ theme }) => theme.fontSizes.button1};
`;

const SubTitleReg = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1_reg};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  white-space: nowrap;
  margin: 0 auto;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: 25px;
  white-space: nowrap;
  margin: 0 auto;
`;

const BodyReg = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1_reg};
  white-space: nowrap;
  margin: 0 auto;
`;
