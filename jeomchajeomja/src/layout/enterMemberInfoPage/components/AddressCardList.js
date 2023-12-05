import styled from "styled-components";
import { mainAddress, subAddress, zip } from "./AddressData";
import { AddressState } from "../../../recoil/atoms/AddressState";
import { useSetRecoilState } from "recoil";

function AddressCardList({ onFocus, onBlur, modalClose }) {
  const setAddress = useSetRecoilState(AddressState);

  const handleCardClick = (address) => {
    setAddress(address);
    modalClose();
  };

  return (
    <Container>
      {mainAddress.map((address, index) => (
        <Card
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleCardClick(address);
            }
          }}
          key={index}
          onClick={() => handleCardClick(address)}
        >
          <RowDiv>
            <NumBtn onFocus={onFocus} onBlur={onBlur}>
              {index + 1}{" "}
            </NumBtn>
            <CardHeader tabIndex="0" onFocus={onFocus} onBlur={onBlur}>
              {" "}
              {zip[index]}
            </CardHeader>
            <CardHeader tabIndex="0" onFocus={onFocus} onBlur={onBlur}>
              {address}
            </CardHeader>
          </RowDiv>
          <CardBody tabIndex="0" onFocus={onFocus} onBlur={onBlur}>
            {subAddress[index]}
          </CardBody>
        </Card>
      ))}
    </Container>
  );
}
export default AddressCardList;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 920px;
  height: 210px;
  border: none;
  gap: 17px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
  box-shadow: inset 0px -20px 25px -25px rgba(0, 0, 0, 0.7);
`;

const RowDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const Card = styled.div`
  width: 920px;
  height: 140px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.black};
  padding: 23px 40px 34px 40px;
`;
const CardHeader = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 30px;
  font-style: normal;
  margin-right: 23px;
  font-weight: 700;
  line-height: 45px;
  gap: 23px;
`;

const CardBody = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 37.5px;
  padding-left: 165px;
`;

const NumBtn = styled.button`
  display: flex;
  width: 36px;
  height: 36px;
  margin-right: 15px;
  color: var(--Background---White, #fff);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  padding: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 25px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.black};
`;
