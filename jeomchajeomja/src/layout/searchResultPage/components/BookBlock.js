import React from "react";
import styled from "styled-components";

const BookBlock = () => {
  return (
    <div style={{ width: "100%", padding: "0 240px" }}>
      <Block>
        <Row>
          <Circle>
            <Body style={{ color: "black" }}>1</Body>
          </Circle>
          <div style={{ width: "24px" }} />
          <Body style={{ fontSize: "30px" }}>개념원리 RPM 고등 수학(하)</Body>
        </Row>
        <div style={{ height: "8px" }} />
        <Row>
          <div style={{ width: "60px" }} />
          <BodyReg>
            재작 재단 | 행복 나눔 재단&nbsp; &nbsp;저자 | 이홍섭&nbsp;
            &nbsp;작성년도 | 2022
          </BodyReg>
        </Row>
        <div style={{ height: "25px" }} />
        <ButtonBar>
          <Button style={{ color: "white", background: "black" }}>
            장바구니
          </Button>
          <Button>구매하기</Button>
        </ButtonBar>
      </Block>
    </div>
  );
};

const Block = styled.div`
  width: 100%;
  height: 220px;
  flex-shrink: 0;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.black};
  padding: 25px 30px;
`;

const ButtonBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 15px;
`;

const Button = styled.button`
  padding: 9px 25px;
  white-space: nowrap;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.button1};
  font-size: ${({ theme }) => theme.fontSizes.button1};
`;

const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  border-radius: 25px;
  background: ${({ theme }) => theme.colors.white};
`;

const Body = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
`;

const BodyReg = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.body1_reg};
  white-space: pre;
`;

export default BookBlock;
