import { Link } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/img/점차점차로고.svg";

function NavBar() {
  return (
    <Div>
      <LinkDiv>
        <Link to="/login">
          <Body>로그인</Body>
        </Link>
      </LinkDiv>
      <HeaderDiv>
        <RowDiv>
          점차점자
          <MainLogo src={Logo} alt="점차점차 로고" />
        </RowDiv>
      </HeaderDiv>
    </Div>
  );
}
export default NavBar;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 348px;
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  color: ${({ theme }) => theme.colors.backgroundWhite};
  font-family: ${({ theme }) => theme.typography.header0.fontFamily};
  font-weight: ${({ theme }) => theme.typography.header0.fontWeight};
  font-size: ${({ theme }) => theme.typography.header0.fontSize};
`;

const Body = styled.body`
  font-size: ${({ theme }) => theme.typography.body1Regular.fontSize};
  color: ${({ theme }) => theme.colors.backgroundWhite};
  font-weight: ${({ theme }) => theme.typography.body1Regular.fontWeight};
`;

const LinkDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 200px;
  padding-top: 20px;
`;

const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-left: 200px;
  padding-top: 20px;
`;
const MainLogo = styled.img`
  background-color: ${({ theme }) => theme.colors.black};
  width: 300px;
  height: auto;
`;
