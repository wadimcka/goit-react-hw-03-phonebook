import styled from 'styled-components';

export const FilterWraper = styled.div`
  padding: 16px;
  margin-top: 25px;
  border-radius: 8px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  border: 1px solid #ccc;
`;

export const FilterInputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: rgb(168 199 250 / 1);
    cursor: pointer;
  }
`;

export const FilterInputField = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  font-size: 16px;
  border-radius: 8px;
  border: solid 1px rgb(227 227 227 / 1);
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    border-color: rgb(168 199 250 / 1);
    outline: none;
  }
`;
