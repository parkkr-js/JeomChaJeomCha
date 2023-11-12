import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

function StyleTest() {
  return (
    <ThemeProvider theme={theme}>
      <Header1>헤더 0 스타일 적용 예시</Header1>
      <h1>미적용한거</h1>
    </ThemeProvider>
  );
}

export default StyleTest;

const Header1 = styled.h1`
  font-family: ${({ theme }) => theme.typography.header1.fontFamily};
  font-weight: ${({ theme }) => theme.typography.header1.fontWeight};
  font-size: ${({ theme }) => theme.typography.header1.fontSize};
  letter-spacing: ${({ theme }) => theme.typography.header1.letterSpacing};
  color: ${({ theme }) => theme.colors.black};
`;
