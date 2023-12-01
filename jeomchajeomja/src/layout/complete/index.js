import React from "react";
import styled from "styled-components";
import TopNavBar from "../../common/TopNavBar";
import { useParams } from "react-router-dom";

const Complete = () => {
  const { id } = useParams();

  return (
    <Column>
      <TopNavBar />
    </Column>
  );
};

export default Complete;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 240px;
  width: 100%;
`;
