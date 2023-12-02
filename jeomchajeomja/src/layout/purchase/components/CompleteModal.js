import Modal from "@mui/material/Modal";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

const CompleteModal = ({ isModalOpen, setIsModalOpen, handleCancelClick }) => {
  const navigate = useNavigate();

  const handleCompleteClick = () => {
    setIsModalOpen(false);
    handleCancelClick();
    navigate("./complete");
  };

  return (
    <ModalComponent
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Column>
        <Div>
          <Header id="modal-modal-title" style={{ color: "white" }}>
            결제하기
          </Header>
        </Div>
        <ModalBody>
          <Header>
            앱으로 이동하여
            <br />
            결제를 진행해 주세요.
          </Header>
          <Row>
            <ModalButton onClick={handleCompleteClick}>결제 완료</ModalButton>
          </Row>
        </ModalBody>
      </Column>
    </ModalComponent>
  );
};

export default CompleteModal;

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
  padding: 40px 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  height: 540px;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
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
  padding: 9px 20px;
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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: ${({ theme }) => theme.colors.black};
  width: 100%;
  padding: 34px 40px 20px;
`;

const Header = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.header1};
  font-size: ${({ theme }) => theme.fontSizes.header1};
  white-space: nowrap;
`;
