import styled from "styled-components";

function AddressCard() {
  const address = {
    address1: "서울 강북구 한빛맹학교",
    address1_1: "서울 강북구 삼양로73가길 47 한빛맹학교",
    address2: "서울 강북구 사회복지법인한빛재단",
    address2_1: "서울 강북구 삼양로73가길 59 사회복지법인한빛재단",
    zip: "01103",
  };
  return (
    <div className="address-card">
      <div className="address-card__address">
        <div>{address1}</div>
        <div>{address2}</div>
        <div>{`${city}, ${state} ${zip}`}</div>
      </div>
      <div className="address-card__actions">
        <button className="address-card__action" onClick={onEdit}>
          Edit
        </button>
        <button className="address-card__action" onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}
export default AddressCard;

const Card = styled.div`
  width: 920px;
  height: 140px;
  border-radius: 20px;
  border: 2px solid ${({ theme }) => theme.colors.black};
`;
const CardHeader = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 45px;
`;

const CardBody = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 37.5px;
`;

const NumBtn = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.body1};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  line-height: 150%;
`;
