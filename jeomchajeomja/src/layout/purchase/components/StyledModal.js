import Modal from "@mui/material/Modal";
import { styled } from "styled-components";
import { useState } from "react";
import CompleteModal from "./CompleteModal";

const StyledModal = ({ isOpen, setIsOpen }) => {
  const [paymentMethod, setPaymentMethod] = useState("토스페이");
  const [agree, setAgree] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    { name: "토스페이", checked: true },
    { name: "가상계좌", checked: false },
  ]);

  const handleMethodClick = (event, item, index) => {
    const temp = paymentMethods;
    temp.map((method, i) => (method.checked = i === index));
    setPaymentMethods(temp);
    setPaymentMethod(item.name);
  };

  const handleCancelClick = () => {
    setAgree(false);
    setPaymentMethod("토스페이");
    setPaymentMethods([
      { name: "토스페이", checked: true },
      { name: "가상계좌", checked: false },
    ]);
    setIsOpen(false);
  };

  const handlePurchaseClick = () => {
    setIsModalOpen(true);
  };

  return (
    <ModalComponent open={isOpen} onClose={() => setIsOpen(false)}>
      <Column>
        <Div>
          <Header>결제하기</Header>
          <div style={{ height: "12px" }} />
          <SubTitle>페이 앱 또는 가상계좌로 결제 가능합니다.</SubTitle>
        </Div>
        <ModalBody>
          <ButtonBar>
            {paymentMethods.map((item, index) => {
              if (item.checked) {
                return (
                  <MethodButton
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    {item.name}
                  </MethodButton>
                );
              }
              return (
                <MethodButton
                  onClick={(event) => handleMethodClick(event, item, index)}
                >
                  {item.name}
                </MethodButton>
              );
            })}
          </ButtonBar>
          <div style={{ height: "30px" }} />
          <Row>
            <BodyReg>[필수] 결제 서비스 이용 약관, 개인정보 처리 동의</BodyReg>
            <ButtonBar style={{ gap: "10px" }}>
              <TermsButton
                style={
                  agree
                    ? { width: "154px" }
                    : {
                        width: "154px",
                        color: "black",
                        backgroundColor: "white",
                      }
                }
                onClick={() => setAgree(!agree)}
              >
                {agree ? "동의함" : "동의하지 않음"}
              </TermsButton>
              <TermsButton>자세히 보기</TermsButton>
            </ButtonBar>
          </Row>
          <div style={{ height: "90px" }} />
          <ButtonBar style={{ justifyContent: "center" }}>
            <ModalButton
              disabled={agree === false}
              onClick={handlePurchaseClick}
              style={
                agree === false ? { opacity: "0.2", cursor: "not-allowed" } : {}
              }
            >
              {paymentMethod} 결제하기
            </ModalButton>
            <CompleteModal
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              handleCancelClick={handleCancelClick}
            />
            <ModalButton
              onClick={handleCancelClick}
              style={{ padding: "9px 20px" }}
            >
              취소
            </ModalButton>
          </ButtonBar>
        </ModalBody>
      </Column>
    </ModalComponent>
  );
};

export default StyledModal;

const ModalComponent = styled(Modal)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 20px;
  width: 810px;
  height: 670px;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

const ModalBody = styled.div`
  padding: 35px 40px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ButtonBar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

const ModalButton = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 9px 40px;
  border-radius: 15px;
  font-size: 35px;
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  height: 71px;
`;

const TermsButton = styled.button`
  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 5px 20px;
  border-radius: 15px;
  font-size: ${({ theme }) => theme.fontSizes.body1};
  font-weight: ${({ theme }) => theme.fontWeights.body1_reg};
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
`;

const MethodButton = styled.button`
  width: 360px;
  height: 200px;
  border-radius: 15px;
  background-color: transparent;
  padding: 8px 30px;
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  border: 2px solid ${({ theme }) => theme.colors.black};
`;

const BodyReg = styled.button`
  border: none;
  background-color: transparent;
  line-height: 150%;
  font-family: "Nanum Gothic";
  padding: 0;
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1_reg};
  white-space: nowrap;
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 34px 40px 20px;
`;

const Header = styled.button`
  border: none;
  background-color: transparent;
  line-height: 150%;
  font-family: "Nanum Gothic";
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: ${({ theme }) => theme.fontSizes.header1};
  white-space: nowrap;
`;

const SubTitle = styled.button`
  border: none;
  background-color: transparent;
  line-height: 150%;
  font-family: "Nanum Gothic";
  padding: 0;
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  font-size: 25px;
  white-space: nowrap;
`;
