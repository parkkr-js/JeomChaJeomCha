import React from "react";
import TitleBar from "./components/TitleBar";
import EnterSearch from "./components/EnterSearch";
import magnifyingGlass from "../../img/magnifying_glass.svg";
import loudSpeaker from "../../img/fluent_speaker-2-24-filled.svg";
import styled from "styled-components";

const SearchResult = () => {
  return (
    <Column>
      <TitleBar />
      <EnterSearch />
      <div style={{ height: "70px" }} />
      <img src={magnifyingGlass} alt="돋보기 아이콘" />
      <div style={{ height: "24px" }} />
      <SubTitle>‘키워드’에 맞는 검색 결과가 없습니다</SubTitle>
      <div style={{ height: "119px" }} />
      <Row style={{ justifyContent: "flex-start" }}>
        <Button>학습자료 신청하기</Button>
      </Row>
      <div style={{ height: "12px" }} />
      <Row>
        <Body>찾으시는 자료가 없다면, 새로 신청할 수 있습니다. </Body>
        <img src={loudSpeaker} alt="신청 버튼" />
      </Row>
    </Column>
  );
};

export default SearchResult;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0px 240px;
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

const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
`;
