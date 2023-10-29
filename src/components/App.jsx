import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import { Section } from './Section/Section';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;

    if (
      contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    )
      return alert(`${name} is already in contscts`);

    const addedContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [addedContact, ...prevState.contacts],
    }));
  };

  handlerFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  handlerDeleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const filteredContact = this.getFilteredContacts();

    return (
      <>
        <Section title="Phonebook">
          <Form
            onFormSubmit={this.addContact}
            nameId={this.nameId}
            telId={this.telId}
          />
        </Section>

        <Section>
          <h2>Contacts</h2>
          <Filter
            value={this.state.filter}
            onChange={this.handlerFilterChange}
          />
          <ContactList
            contacts={filteredContact}
            handlerDeleteContact={this.handlerDeleteContact}
          />
        </Section>
      </>
    );
  }
}
