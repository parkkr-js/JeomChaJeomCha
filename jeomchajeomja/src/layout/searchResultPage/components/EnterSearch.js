import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

function EnterSearch() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Row>
        <InputWrapper>
          <StyledInput
            {...register("keyword", { required: true })}
            placeholder="키워드"
          />
          <ActionButton>음성입력</ActionButton>
          <Button type="submit" value="Submit">
            검색
          </Button>
        </InputWrapper>
      </Row>
    </form>
  );
}
export default EnterSearch;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  border: solid 3px ${({ theme }) => theme.colors.black};
  width: 100%;
  height: 74px;
  border-radius: 20px;
`;
const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 20px 240px;
`;

const StyledInput = styled.input`
  border: none;
  width: 100%;
  border-radius: 20px;
  padding: 18px 24px;
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
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.body1};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  font-family: "Nanum Gothic", serif;
  background: transparent;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`;

const Button = styled.button`
  padding: 9px 25px;
  white-space: nowrap;
  border-radius: 15px;
  margin: 10px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  font-weight: ${({ theme }) => theme.fontWeights.button1};
  font-size: ${({ theme }) => theme.fontSizes.button1};
`;
