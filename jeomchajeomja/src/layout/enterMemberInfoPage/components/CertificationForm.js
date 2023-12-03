import React, { useState, useContext, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "../../home/components/Button";
import styled from "styled-components";
import VerificationModal from "./VerificationModal";
function CertificationForm({ transcript, isListening }) {
  const [certiNum, setCertiNum] = useState(transcript);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const handleCertiNumChange = (event) => {
    setCertiNum(event.target.value);
  };
  const handleConfirmClick = () => {
    setIsModalVisible(true); 
  };

  useEffect(() => {
    setCertiNum(transcript);
  }, [transcript]);

  useEffect(() => {
    let timer;
    if (isModalVisible) {
      timer = setTimeout(() => {
        setIsModalVisible(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [isModalVisible]);
  return (
    <>
    <Container1>
      <Body1>
        인증번호를 입력해주세요.
        <br /> 인증번호를 받지 못했다면 Enter를 다시 눌러주세요.
      </Body1>
      <Container2>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "454px",
            height: "60px",
            borderRadius: "15px",
            border: "2px solid #000",
            boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.10)",
            overflow: "hidden",
            backgroundColor: isListening ? "red" : "transparent",
          }}
        >
          <InputBase
            value={certiNum}
            onChange={handleCertiNumChange}
            sx={{
              ml: 1,
              flex: 1,
              fontSize: "24px",
              fontWeight: "bold",
              color: "black",
              textAlign: "right",
              backgroundColor: isListening ? "red" : "transparent",
            }}
          />
        </Paper>
        <Button
          style={{
            display: "inline-flex",
            width: "fit-content",
            height: "60px",
            padding: "9px 17px",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "15px",
            fontSize: "24px",
            fontWeight: 700,
            fontFamily: "NanumGothic",
            fontStyle: "normal",
            lineHeight: "36px",
          }}
          onClick={handleConfirmClick}
        >
          확인
        </Button>
      </Container2>
    </Container1>
     {isModalVisible && <VerificationModal />} 
     </>
  );
}
export default CertificationForm;

const Container1 = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  justify-content: start;
`;

const Container2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 20px;
`;

const Body1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  line-height: 150%;
  
`;
