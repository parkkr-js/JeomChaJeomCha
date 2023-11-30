import React from "react";
import TopNavBar from "../../common/TopNavBar";
import styled from "styled-components";

const Purchase = () => {
  return (
    <Column>
      <TopNavBar />
    </Column>
  );
};

export default Purchase;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 25px 240px;
`;
