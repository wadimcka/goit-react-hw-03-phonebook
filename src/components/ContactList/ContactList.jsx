import React from 'react';
import {
  Contact,
  DeleteContactBtn,
  ListOfContacts,
} from './ContactList.styled';

function ContactList({ contacts, handlerDeleteContact }) {
  return (
    <ListOfContacts>
      {contacts &&
        contacts.map(({ id, name, number }) => (
          <Contact key={id}>
            {name} : {number}
            <DeleteContactBtn
              type="button"
              onClick={() => handlerDeleteContact(id)}
            >
              Delete
            </DeleteContactBtn>
          </Contact>
        ))}
    </ListOfContacts>
  );
}

export default ContactList;
