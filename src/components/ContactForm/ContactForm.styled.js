import { Field, Form } from 'formik';
import styled from 'styled-components';

export const FormWraper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

export const FormButton = styled.button`
  display: block;
  margin: 20px auto 10px auto;
  width: 200px;
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #e6f0ff;
  color: #0d47a1;
  cursor: pointer;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1), transform 100ms ease;
  &:hover,
  &:focus {
    background-color: rgb(168 199 250 / 1);
    border: 1px solid transparent;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  }
  &:active {
    transform: scale(1.04);
  }
`;

export const InputWraper = styled.div`
  padding: 8px;
  border-radius: 8px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const InputLabel = styled.label`
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

export const InputField = styled(Field)`
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
