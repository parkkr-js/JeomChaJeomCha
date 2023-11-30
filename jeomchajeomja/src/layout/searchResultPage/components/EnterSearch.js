import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import styled from "styled-components";

function EnterSearch({ setResult, keyword, setKeyword }) {
  const bookLists = useSelector((state) => state.book.book);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    setKeyword(data.keyword);
    setResult(bookLists.filter((book) => book.title.includes(data.keyword)));
  };

  useEffect(() => {
    setResult(bookLists.filter((book) => book.title.includes(keyword)));
  }, [bookLists, keyword, setResult]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
      <Column>
        <SubTitle>스페이스바를 누르는 동안 음성 검색이 활성화됩니다.</SubTitle>
        <Row>
          <InputWrapper>
            <StyledInput
              {...register("keyword", { required: true })}
              placeholder={keyword}
            />
            <Button type="submit" value="Submit">
              검색
            </Button>
          </InputWrapper>
        </Row>
      </Column>
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
  overflow: hidden;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-shrink: 0;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 25px 240px;
  gap: 5px;
  flex-shrink: 0;
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

const SubTitle = styled.div`
  color: ${({ theme }) => theme.colors.black};
  font-weight: ${({ theme }) => theme.fontWeights.subtitle1_reg};
  font-size: ${({ theme }) => theme.fontSizes.subtitle1};
  white-space: nowrap;
`;

/* const ActionButton = styled.button`
  border: none;
  font-size: ${({ theme }) => theme.fontSizes.body1};
  font-weight: ${({ theme }) => theme.fontWeights.body1};
  font-family: "Nanum Gothic", serif;
  background: transparent;
  white-space: nowrap;
  color: ${({ theme }) => theme.colors.black};
  cursor: pointer;
`; */
