import s from './App.module.css';
import React from 'react';
import Phonebook from './components/Phonebook/Phonebook';
import Form from './components/Form/Form';
import Filter from './components/Filter/Filter';
import { nanoid } from 'nanoid';
import toast, { Toaster } from 'react-hot-toast';

class App extends React.Component {
  state = {
    // contacts: [],
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
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

    // this.setState(prevState => ({
    //   contacts: [contact, ...prevState.contacts],
    // }));

    // const notify = () => toast(`${name} is already in contacts.`);
    //   this.state.contacts.includes({name})? toast.error(notify) :  this.setState(prevState => ({
    //       contacts: [contact, ...prevState.contacts],
    //     }));

    // this.setState(prevState => ({
    //           contacts: prevState.contacts.map(contact => {
    //               if (contact.name === name) {
    //                 const notify = () => toast(`${name} is already in contacts.`);
    //                return toast.error(notify);

    //               }
    //                 // console.log('такой контакт уже есть');
    //              return [contact, ...prevState.contacts];

    //           }),
    //       }));
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
        <h1 className={s.title}>Phonebook</h1>
        <Form onSubmit={this.addContact} />

        <h2 className={s.title}>Contacts</h2>

        <Filter value={filter} onChange={this.changeFilter} />
        <Phonebook contacts={filteredContacts} onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;
