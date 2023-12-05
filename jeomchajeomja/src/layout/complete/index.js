import React, { useContext, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import TopNavBar from "../../common/TopNavBar";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { PurchaseContext } from "../../model/PurchaseProvider";
import CompleteBlock from "./components/CompleteBlock";

const Complete = () => {
  const focusRef = useRef([]);
  const [textContent, setTextContent] = useState("");
  const [reading, setReading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [book] = useContext(PurchaseContext);
  const purchase = useSelector((state) => state.shoppingCart.shoppingCart);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Tab" && reading) {
        window.speechSynthesis.cancel();
        setReading(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [reading]);

  useEffect(() => {
    const handleFocus = (index) => {
      setTextContent(focusRef.current[index].textContent);
    };

    focusRef.current.forEach((ref, index) => {
      ref.addEventListener("focus", () => handleFocus(index));
    });

    return () => {
      const currentRef = focusRef.current; // 현재 값 저장
      currentRef.forEach((ref, index) => {
        if (ref !== null)
          ref.removeEventListener("focus", () => handleFocus(index));
      });
    };
  }, []);

  useEffect(() => {
    if (textContent !== "") {
      const speech = new SpeechSynthesisUtterance();
      speech.lang = "ko-KR";
      speech.text = textContent;
      speech.addEventListener("end", () => {
        setReading(false);
      });

      window.speechSynthesis.speak(speech);
      setReading(true);
    }
  }, [textContent]);

  return (
    <Column ref={(ref) => (focusRef.current[0] = ref)}>
      <TopNavBar focusRef={focusRef} />
      <div style={{ height: "115px" }} />
      <Header tabIndex={0} ref={(ref) => (focusRef.current[6] = ref)}>
        구매 완료
      </Header>
      <div style={{ height: "35px" }} />
      <Title tabIndex={0} ref={(ref) => (focusRef.current[7] = ref)}>
        결제가 완료되었습니다.
      </Title>
      <div style={{ height: "15px" }} />
      <SubTitleReg tabIndex={0} ref={(ref) => (focusRef.current[8] = ref)}>
        여러분의 소중한 대체자료 참고서가
        <br />
        점자 인쇄소에서 출력 후 4일 내로 배송 예정입니다.
      </SubTitleReg>
      <div style={{ height: "25px" }} />
      <BodyReg tabIndex={0} ref={(ref) => (focusRef.current[9] = ref)}>
        점차점자가 여러분의 더 넓은 미래를 응원합니다.
      </BodyReg>
      <div style={{ height: "40px" }} />
      <Body tabIndex={0} ref={(ref) => (focusRef.current[10] = ref)}>
        구매 내역
      </Body>
      <div style={{ height: "20px" }} />
      {id === "true" ? (
        purchase.map((item, i) => {
          return (
            <>
              <CompleteBlock book={item} id={i + 1} focusRef={focusRef} />
              <div style={{ height: "10px" }} />
            </>
          );
        })
      ) : (
        <>
          <CompleteBlock book={book} id={1} focusRef={focusRef} />
          <div style={{ height: "10px" }} />
        </>
      )}
      <div style={{ height: "60px" }} />
      <Button
        ref={(ref) =>
          id === "true"
            ? (focusRef.current[10 + purchase.length * 2 + 1] = ref)
            : (focusRef.current[13] = ref)
        }
        onClick={() => navigate("/")}
      >
        홈으로 돌아가기
      </Button>
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
