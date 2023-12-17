import { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/ContactsList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const localData = localStorage.getItem('contacts');
    if (localData && JSON.parse(localData).length > 0) {
      this.setState({
        contacts: JSON.parse(localData),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contacts?.length !== this.state.contacts.length)
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
  }

  createContact = ({ name, number }) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const isDuplicated = this.state.contacts.find(
      el => el.name === newContact.name
    );
    if (isDuplicated) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    this.setState(prev => ({
      contacts: [...prev.contacts, newContact],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const { contacts } = this.state;
    const filterToLowerCase = this.state.filter.toLowerCase();
    const filterContact = this.state.contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterToLowerCase)
    );
    return (
      <>
        <div
          style={{
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 'auto',
            marginTop: '50px',
            marginRight: 'auto',
            padding: '40px 20px',
            width: '500px',
            fontSize: 30,
            color: '#010101',
          }}
        >
          <div className="contactsForm">
            <ContactForm onSubmit={this.createContact} />
            {contacts.length ? <h2 className="title">Contacts</h2> : <></>}
            {contacts.length ? (
              <Filter value={this.state.filter} onChange={this.changeFilter} />
            ) : (
              <></>
            )}

            <ContactList
              contacts={filterContact}
              onDeleteContact={this.deleteContact}
            />
          </div>
        </div>
      </>
    );
  }
}
