import React, { useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import TopNavBar from "../../common/TopNavBar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PurchaseContext } from "../../model/PurchaseProvider";
import CompleteBlock from "./components/CompleteBlock";

const Complete = () => {
  const ref = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const [book] = useContext(PurchaseContext);
  const purchase = useSelector((state) => state.shoppingCart.shoppingCart);

  const setFocus = (element) => {
    if (!element) return;

    if (
      getComputedStyle(element).whiteSpace === "nowrap" &&
      element.textContent
    )
      element.tabIndex = 0;

    Array.from(element.children).forEach((child) => setFocus(child));
  };

  useEffect(() => {
    setFocus(ref.current);
  }, []);

  return (
    <Column ref={ref}>
      <TopNavBar />
      <div style={{ height: "115px" }} />
      <Header>구매 완료</Header>
      <div style={{ height: "35px" }} />
      <Title>결제가 완료되었습니다.</Title>
      <div style={{ height: "15px" }} />
      <SubTitleReg>
        여러분의 소중한 대체자료 참고서가
        <br />
        점자 인쇄소에서 출력 후 4일 내로 배송 예정입니다.
      </SubTitleReg>
      <div style={{ height: "25px" }} />
      <BodyReg>점차점자가 여러분의 더 넓은 미래를 응원합니다.</BodyReg>
      <div style={{ height: "40px" }} />
      <Body>구매 내역</Body>
      <div style={{ height: "20px" }} />
      {id === "true" ? (
        purchase.map((item) => {
          return (
            <>
              <CompleteBlock book={item} />
              <div style={{ height: "10px" }} />
            </>
          );
        })
      ) : (
        <>
          <CompleteBlock book={book} />
          <div style={{ height: "10px" }} />
        </>
      )}
      <div style={{ height: "60px" }} />
      <Button onClick={() => navigate("/")}>홈으로 돌아가기</Button>
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

const Header = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: ${({ theme }) => theme.fontSizes.header1};
  white-space: nowrap;
`;

const Title = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: 35px;
  white-space: nowrap;
`;

const SubTitleReg = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1_reg};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  white-space: nowrap;
  text-align: center;
`;

const BodyReg = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1_reg};
  white-space: nowrap;
`;

const Body = styled.div`
  font-size: 25px;
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  white-space: nowrap;
`;

const Button = styled.button`
  padding: 12px 28px;
  white-space: nowrap;
  border-radius: 15px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
`;
