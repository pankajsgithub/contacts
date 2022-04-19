import React from 'react'

const ContactCard = ({ contact }) => {
    return (
        <div className='item'>
            <i class="user circle icon" style={{ paddingTop: '0.6rem', color: 'gray' }}></i>
            <div className='content'>
                <div className='header'>{contact.name}</div>
                <div className=''>{contact.email}</div>
            </div>
            <div style={{ textAlign: 'right', backgroundColor: 'transparent', marginTop: '-1rem' }}>
                <i className='trash alternate outline icon' style={{ color: 'red', paddingBottom: '-1rem' }}></i>
            </div>
        </div>
    )
}

export default ContactCard