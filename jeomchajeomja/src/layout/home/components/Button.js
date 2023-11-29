import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  align-items: center;
  width: 1200px;
  padding: 20px 30px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.button1};
  font-size: 35px;
  line-height: 150%;
  box-shadow: 0px 6px 10px 0px rgba(0, 0, 0, 0.1);
  gap: 20px;
`;
