import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import TopNavBar from "../../common/TopNavBar";

const ShoppingCart = () => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current?.focus();
  }, []);

  return (
    <Column>
      <TopNavBar ref={ref} />
      <div style={{ height: "45px" }} />
    </Column>
  );
};

export default ShoppingCart;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 25px 240px;
`;
