import styled from 'styled-components';

export const ContactListing = styled.ul`
  display: block;
  padding: 20px 0px;
  margin: 0 auto;
`;

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #f8f8f8;
  padding: 12px 16px;
  margin-bottom: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
`;

export const ContactInfo = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  font-size: 16px;
  color: #333;
`;

export const DeleteButton = styled.button`
  padding: 6px 10px;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  background-color: #ff6b6b;
  color: white;
  cursor: pointer;
  transition: background-color 200ms ease;

  &:hover {
    background-color: #e63946;
  }
  &:active {
    transform: scale(1.04);
  }
`;
