import React from 'react';
import {
  ContactInfo,
  ContactItem,
  ContactListing,
  DeleteButton,
} from './ContactList.styled';

export default function ContactList({ contacts, handlerContactDelete }) {
  return (
    <ContactListing>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactInfo>
              <span>{name} :</span>
              <span>{number}</span>
            </ContactInfo>
            <DeleteButton
              type="button"
              onClick={() => {
                handlerContactDelete(id);
              }}
            >
              Delete
            </DeleteButton>
          </ContactItem>
        );
      })}
    </ContactListing>
  );
}
