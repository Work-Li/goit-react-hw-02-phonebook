import './App.css';
import React from 'react';
import Phonebook from './components/Phonebook/Phonebook';
import Form from './components/Form/Form';
import { nanoid } from 'nanoid';

class App extends React.Component {
  idContact = nanoid();
  state = {
    contacts: [
      { id: this.idContact, name: 'Anna' },
      { id: nanoid(), name: 'Bet' },
      { id: nanoid(), name: 'Lisa' },
    ],
    name: '',
    number: '',
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h1 className="{s.title }">Phonebook</h1>

        <Form onSubmit={this.formSubmitHandler} />

        <Phonebook contacts={contacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
