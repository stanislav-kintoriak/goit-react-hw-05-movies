import styled from '@emotion/styled';
export const Head = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  gap: 25px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 14px;
  padding-right: 14px;
  & h1 {
    margin: 0;
    padding: 0;
  }

  @media (min-width: 768px) {
    width: 768px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

export const Form = styled.form`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  background-color: #fff;
  border: 1px solid #000000;

  border-radius: 3px;
  overflow: hidden;
`;

export const SearchInput = styled.input`
  margin: 0 auto;
  width: 100%;
  height: 25px;

  padding: 0 25px;
  font-size: 16px;
  border-radius: 3px;
  border: none;
  outline: none;
  transition: 0.35s ease;
  & :focus,
  &:hover,
  &:not(:placeholder-shown) {
    color: #000000;
  }
  &:hover::placeholder {
    color: #000000;
  }
`;

export const SearchBtn = styled.button`
  float: right;
  width: 70px;
  height: 45px;
  top: 0px;
  right: px;
  border: none;
  background-color: transparent;
  transition: transform 250ms cubic-bezier(0.5, 0, 0.1, 1);
  cursor: pointer;

  &:hover,
  &:focus,
  &:active {
    transform: scale(1.1);
    outline: none;
  }
`;