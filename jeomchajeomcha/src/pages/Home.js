import React from "react";
import styled from "styled-components";
import Logo from "../assets/img/점차점차로고.svg";

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <MainLogo src={Logo} alt="점차점차 로고" />
    </div>
  );
}
export default Home;

const MainLogo = styled.img`
  background-color: ${({ theme }) => theme.colors.black};
  width: 100px;
  height: 100px;
`;
