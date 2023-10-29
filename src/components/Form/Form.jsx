import React, { Component } from 'react';
import {
  FormBtn,
  FormContainer,
  FormInput,
  FormInputLabel,
} from './Form.styled';

export default class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handlerFormInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  formSubmit = event => {
    event.preventDefault();
    this.props.onFormSubmit(this.state);
    this.formReset();
  };

  formReset = () => {
    this.setState({
      name: '',
      number: '',
      id: '',
    });
  };

  render() {
    return (
      <FormContainer onSubmit={this.formSubmit}>
        <FormInputLabel htmlFor={this.props.nameId}> Name</FormInputLabel>
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={this.state.name}
          onChange={this.handlerFormInputChange}
          id={this.props.nameId}
        />
        <FormInputLabel htmlFor={this.props.telID}> Number</FormInputLabel>
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={this.state.number}
          onChange={this.handlerFormInputChange}
          id={this.props.telID}
        />
        <FormBtn type="submit">Add contact</FormBtn>
      </FormContainer>
    );
  }
}
