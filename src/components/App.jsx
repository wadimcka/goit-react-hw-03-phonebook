import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import { Section } from './Section/Section';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const LS_KEY = 'saved_contacts';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = JSON.parse(localStorage.getItem(LS_KEY));
    if (savedContacts) {
      this.setState({ contacts: savedContacts });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem(LS_KEY, JSON.stringify(contacts));
    }
  }

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
    if (this.state.contacts)
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
