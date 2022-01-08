import './App.css';
import React from 'react';
import Phonebook from './components/Phonebook/Phonebook';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import { nanoid } from 'nanoid';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  addContact = ({ name, number }) => {
    console.log({ name, number });
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getfilteredContacts = () => {
    const normalizedFilter = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;

    const filteredContacts = this.getfilteredContacts();

    return (
      <>
        <h1 className="{s.title }">Phonebook</h1>

        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>

        <Filter value={filter} onChange={this.changeFilter} />
        <Phonebook contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
