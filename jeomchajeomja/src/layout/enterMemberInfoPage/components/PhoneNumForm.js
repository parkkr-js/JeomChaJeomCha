import React, { useState, useContext, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "../../home/components/Button";
import styled from "styled-components";

function PhoneNumForm({ transcript, isListening }) {
  const [phoneNum, setPhoneNum] = useState(transcript);
  const handlePhoneNumChange = (event) => {
    setPhoneNum(event.target.value);
  };

  useEffect(() => {
    setPhoneNum(transcript);
  }, [transcript]);
  return (
    <Container>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "357px",
          height: "60px",
          borderRadius: "15px",
          border: "2px solid #000",
          boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.10)",
          overflow: "hidden",
          backgroundColor: isListening ? "red" : "transparent",
        }}
      >
        <InputBase
          value={phoneNum}
          onChange={handlePhoneNumChange}
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
      >
        인증번호 발송
      </Button>
    </Container>
  );
}
export default PhoneNumForm;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 20px;
`;
