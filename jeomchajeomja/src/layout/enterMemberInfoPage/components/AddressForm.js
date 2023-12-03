import React, { useState, useContext, useEffect } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "../../home/components/Button";
import styled from "styled-components";
import FindAddressModal from "./FindAddressModal";

function AddressForm({ transcript, isListening }) {
  const [address, setAddress] = useState(transcript);
  const [specificAddress, setSpecificAddress] = useState(transcript);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handlesetAddressChange = (event) => {
    setAddress(event.target.value);
  };
  const handleSpecificAddressChange = (event) => {
    setSpecificAddress(event.target.value);
  };

  const handleFindAddressClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    setAddress(transcript);
  }, [transcript]);

  return (
    <Colunm>
      <Row>
        <Button
          style={{
            display: "inline-flex",
            width: "138px",
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
          onClick={handleFindAddressClick}
        >
          주소 찾기
        </Button>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            width: "402px",
            height: "60px",
            borderRadius: "15px",
            border: "2px solid #000",
            boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.10)",
            overflow: "hidden",
            backgroundColor: "transparent",
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
              backgroundColor: "transparent",
            }}
          />
        </Paper>
      </Row>
      <Paper
        component="form"
        sx={{
          display: "flex",
          alignItems: "center",
          width: "560px",
          height: "60px",
          borderRadius: "15px",
          border: "2px solid #000",
          boxShadow: "0px 6px 10px 0px rgba(0, 0, 0, 0.10)",
          overflow: "hidden",
          backgroundColor: isListening ? "red" : "transparent",
        }}
      >
        <InputBase
          value={specificAddress}
          onChange={handleSpecificAddressChange}
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
      {isModalVisible && (
        <FindAddressModal modalClose={handleFindAddressClick} />
      )}
    </Colunm>
  );
}
export default AddressForm;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: start;
  gap: 20px;
`;

const Colunm = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: start;
  justify-content: center;
  gap: 20px;
`;
