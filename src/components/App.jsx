import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import {
  Section,
  ContactList,
  FilterContact,
  ContactForm,
  UTILS,
} from 'components';

import { EmptyMessage } from './App.styled';

const LS_KEY = 'saved_contacts';

export default class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    let savedContacts = UTILS.getFromLocalStorage(LS_KEY);
    if (savedContacts) {
      this.setState({
        contacts: savedContacts,
      });
    }
  }

  componentDidUpdate(_, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      UTILS.saveToLocalStorage(LS_KEY, contacts);
    }
  }

  addContact = ({ name, number }) => {
    const existingContact = this.state.contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );
    if (existingContact) {
      return alert(`${name} is already in contacts`);
    }
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact],
    }));
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onFilterChange = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  handlerContactDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const visibleContacts = this.getVisibleContacts();
    return (
      <div>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>

        <Section title="Contacts">
          <FilterContact
            filter={this.state.filter}
            onFilterChange={this.onFilterChange}
          />
          {this.state.contacts.length !== 0 ? (
            <ContactList
              contacts={visibleContacts}
              handlerContactDelete={this.handlerContactDelete}
            />
          ) : (
            <EmptyMessage>You have no saved contacts</EmptyMessage>
          )}
        </Section>
      </div>
    );
  }
}
