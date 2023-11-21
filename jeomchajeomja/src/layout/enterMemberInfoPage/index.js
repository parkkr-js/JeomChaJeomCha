import styled from "styled-components";
import arrowimg from "../../img/ion_chevron-back.svg";
import num1img from "../../img/N1.svg";
import num2img from "../../img/N2.svg";
import EnterForm from "./components/EnterForm";

function EnterMemberInfo() {
  return (
    <Container>
      <BackDiv>
        <BackBtn src={arrowimg} alt="뒤로가기" />
      </BackDiv>
      <Header1>회원 정보 입력</Header1>

      <Content1_1>
        <Num1Img src={num1img} alt="1" />
        <Content1_2>
          <SubTitle1>전화번호를 입력해주세요.</SubTitle1>
          <Body1>주문 및 배송 확인을 위해 필요합니다.</Body1>
          <EnterForm />
        </Content1_2>
       
      </Content1_1>

      <Content1_1>
        <Num1Img src={num2img} alt="2" />
        <Content1_2>
          <SubTitle1>주소를 입력해주세요.</SubTitle1>
          <Body1>정확한 배송을 위해 주소를 확인해주시길 바랍니다. </Body1>
        </Content1_2>
      </Content1_1>
    </Container>
  );
}

export default EnterMemberInfo;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  width: 959px;
  height: 829px;
  margin: 0 auto;
`;

const BackDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  width: 959px;
  padding-top: 30px;
`;

const BackBtn = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: baseline;
  width: 40px;
  height: 40px;
`;

const Header1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.header1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  padding-top: 30px;
`;

const Content1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const Content1_1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
const Content1_2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;
const SubTitle1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  padding-top: 30px;
`;
const Body1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
`;

const Num1Img = styled.img`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 36px;
  height: 36px;
`;
