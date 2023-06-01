import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Page = styled.div`

  margin-left: auto;
  margin-right: auto;
  padding-left: 25px;
  padding-right: 25px;
  }
`;

export const AddContainer = styled.div`

  & ul {
    list-style-type: none;
    padding: 0 0 0 40px;
    margin: 12px 0 0 0;
    display: flex;
    gap: 10px;
    margin-bottom: 40px;

    & li {
      display: inline;
      color: #000000;
      font-family: 'Montserrat', sans-serif;
      font-weight: 400;
      font-size: 20px;
      padding: 0 45px 0 0;
      transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
      &:hover,
      &:focus {
        transform: scale(1.1);
      }
      & a {
        text-decoration: none;
        /* & .active {
          color: red;
          border-bottom: 2px solid #000000;
        } */
      }
    }
  }
  & p,
  & h3 {
    color: #000000;
    font-family: 'Montserrat', sans-serif;
    font-size: 18px;
  }
`;

export const BackButton = styled(Link)`
  display: inline-block;
  width: 100px;
  margin-right: auto;
  margin-bottom: 6px;
  border-radius: 4px;
  box-sizing: border-box;
  color: #000000;
  display: flex;
  font-size: 16px;
  justify-content: center;
  padding: 5px;
  text-decoration: none;
  border: 0;
  cursor: pointer;


  &:hover,
  &:focus {
    background-color: aqua;
  }
`;