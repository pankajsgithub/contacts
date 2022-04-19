import React from 'react';
import './App.css'
import Header from './Header'
import AddContact from './AddContact';
import ContactList from './ContactList';
// import contacts from '../contactsdb.json'

function App() {
  // const [contacts, setContacts] = useState([])

  const addContactHandler = (contact) => {
    console.log(contact)
  }

  return (
    <div style={{ margin: '2rem' }}>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={[]} />
    </div>
  );
}

export default App;
