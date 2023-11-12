import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import { Button } from "./Button";

export default function CustomSearch() {
  return (
    <Paper
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        width: 560,
        height: 74,
        borderRadius: "20px",
        border: "3px solid #000000",
        overflow: "hidden",
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          fontSize: "24px",
          fontWeight: "bold",
          color: "black",
          "&::placeholder": {
            color: "black",
            opacity: 1,
          },
          textAlign: "right",
        }}
        placeholder="음성입력"
      />

      <Button
        style={{ width: "96px", marginRight: "10px", marginLeft: "10px" }}
      >
        검색
      </Button>
    </Paper>
  );
}
