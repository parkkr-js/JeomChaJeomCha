import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const { id } = useParams();

  return (
    <Column>
      <h1>Detail Page {id}</h1>
    </Column>
  );
};

export default Detail;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0 auto;
`;
