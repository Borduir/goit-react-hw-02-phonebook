import React, { Component, Fragment } from 'react';

import Form from './Form/Form'
import Filtre from './Filtre/Filtre'
import ContactList from './ContactList/ContactList'
export class App extends Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filtre: '',
  }
  
  render() {
    return (
      <Fragment>
        <div>
          <h2>Phonebook</h2>
          <Form props={this} />
          <h2>Contacts</h2>
          <Filtre props={this} />
          <ContactList props={this} />
      </div>
      </Fragment>
  );
}
};
