import Modal from "@mui/material/Modal";
import { styled } from "styled-components";
import HeaderBar from "./HeaderBar";
import { useState } from "react";

const StyledModal = ({ isOpen, setIsOpen }) => {
  const [paymentMethod, setPaymentMethod] = useState("네이버페이");
  const [agree, setAgree] = useState(false);
  const [paymentMethods, setPaymentMethods] = useState([
    { id: "①", name: "네이버페이", checked: true },
    { id: "②", name: "카카오페이", checked: false },
    { id: "③", name: "PAYCO", checked: false },
    { id: "④", name: "토스페이", checked: false },
    { id: "⑤", name: "가상계좌", checked: false },
  ]);

  const handleMethodClick = (event, item, index) => {
    const temp = paymentMethods;
    temp.map((method, i) => (method.checked = i === index));
    setPaymentMethods(temp);
    setPaymentMethod(item.name);
  };

  const handleCancelClick = () => {
    setIsOpen(false);
    setAgree(false);
    setPaymentMethod("네이버페이");
    setPaymentMethods([
      { id: "①", name: "네이버페이", checked: true },
      { id: "②", name: "카카오페이", checked: false },
      { id: "③", name: "PAYCO", checked: false },
      { id: "④", name: "토스페이", checked: false },
      { id: "⑤", name: "가상계좌", checked: false },
    ]);
  };

  return (
    <ModalComponent
      open={isOpen}
      onClose={() => setIsOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Column>
        <HeaderBar />
        <ModalBody>
          <ButtonBar>
            {paymentMethods.map((item, index) => {
              if (item.checked) {
                return (
                  <MethodButton
                    style={{ color: "white", backgroundColor: "black" }}
                  >
                    {item.id} {item.name}
                  </MethodButton>
                );
              }
              return (
                <MethodButton
                  onClick={(event) => handleMethodClick(event, item, index)}
                >
                  {item.id} {item.name}
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
                  agree ? {} : { color: "black", backgroundColor: "white" }
                }
                onClick={() => setAgree(!agree)}
              >
                {agree ? "✓" : ""} 동의
              </TermsButton>
              <TermsButton>자세히 보기</TermsButton>
            </ButtonBar>
          </Row>
          <div style={{ height: "90px" }} />
          <ButtonBar style={{ justifyContent: "center" }}>
            <ModalButton>{paymentMethod} 결제하기</ModalButton>
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
  flex-wrap: wrap;
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
  width: 230px;
  height: 90px;
  border-radius: 15px;
  background-color: transparent;
  padding: 8px 30px;
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1};
  border: 2px solid ${({ theme }) => theme.colors.black};
`;

const BodyReg = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.body1};
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.body1_reg};
  white-space: nowrap;
`;
