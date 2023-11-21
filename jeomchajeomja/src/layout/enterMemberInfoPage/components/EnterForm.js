import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import { Button } from "../../../layout/home/components/Button";

function EnterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <InputWrapper>
          <StyledInput
            {...register("phoneNumber", { required: true })}
            placeholder="전화번호를 입력해주세요"
          />
          <ActionButton>음성입력</ActionButton>
        </InputWrapper>
        <Button type="submit" value="Submit">
          인증번호 발송
        </Button>
      </Row>
    </form>
  );
}
export default EnterForm;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  border: solid 2px ${({ theme }) => theme.colors.black};
  width: 357px;
  height: 52px;
  border-radius: 15px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
`;

const StyledInput = styled.input`
  border: none;
  width: 230px;
  border-radius: 15px;
  padding-left: 20px;
  padding-right: 10px;
  font-size: ${({ theme }) => theme.fontSizes.body1};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  font-family: "Nanum Gothic", serif;
  &::-webkit-input-placeholder {
    font-size: ${({ theme }) => theme.fontSizes.body1};
    font-weight: ${({ theme }) => theme.fontWeights.body1};
    font-family: "Nanum Gothic", serif;
  }
  ::placeholder {
    font-size: ${({ theme }) => theme.fontSizes.body1};
    font-weight: ${({ theme }) => theme.fontWeights.body1};
    font-family: "Nanum Gothic", serif;
  }

  :-ms-input-placeholder {
    font-size: ${({ theme }) => theme.fontSizes.body1};
    font-weight: ${({ theme }) => theme.fontWeights.body1};
    font-family: "Nanum Gothic", serif;
  }

  ::-ms-input-placeholder {
    font-size: ${({ theme }) => theme.fontSizes.body1};
    font-weight: ${({ theme }) => theme.fontWeights.body1};
    font-family: "Nanum Gothic", serif;
  }

  :-moz-placeholder {
    font-size: ${({ theme }) => theme.fontSizes.body1};
    font-weight: ${({ theme }) => theme.fontWeights.body1};
    font-family: "Nanum Gothic", serif;
  }
`;

const ActionButton = styled.button`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 109px;
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.body1};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  font-family: "Nanum Gothic", serif;
  background: transparent;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 15px;
  cursor: pointer;
`;
