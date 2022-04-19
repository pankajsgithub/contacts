import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ contacts }) => {

    console.log('Contacts : ', contacts)

    const renderContactList = contacts.map((contact, index) => {
        return (
            <ContactCard contact={contact} />
        )
    }
    )

    return (
        <div className='ui celled list'>
            Contact List
            {renderContactList}
        </div>
    )
}

export default ContactList