import React, { useState, useContext, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "../../home/components/Button";
import styled from "styled-components";

function AddressForm({ transcript, isListening }) {
  const [address, setAddress] = useState(transcript);
  const handlesetAddressChange = (event) => {
    setAddress(event.target.value);
  };

  useEffect(() => {
    setAddress(transcript);
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
          value={address}
          onChange={handlesetAddressChange}
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
        주소 찾기
      </Button>
    </Container>
  );
}
export default AddressForm;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 20px;
`;
