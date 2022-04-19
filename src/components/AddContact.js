import React from 'react'
import { useState } from 'react';

function AddContact(props) {
    const [state, setState] = useState({
        name: '',
        email: ''
    })

    const onChangeFunction = (e) => {
        const { name, value } = e.target;
        setState({ ...state, [name]: value })
    }

    const addContact = (e) => {
        e.preventDefault()
        if (state.name === '' && state.email === '') {
            alert('All the fields are mandatory')
            return
        }
        props.addContactHandler(state)
        setState({ name: '', email: '' })
        alert('done')
        // console.log('State : ', state)
    }

    return (
        <div className='ui main'>
            <h2>Add Contact</h2>
            <form className='ui form' onSubmit={addContact}>
                <div className='field'>
                    <label>Name</label>
                    <input type='text' name='name' placeholder='Name' onChange={onChangeFunction} />
                </div>
                <div className='field'>
                    <label>Email Id</label>
                    <input type='text' name='email' placeholder='Email' onChange={onChangeFunction} />
                </div>
                <button className='ui button blue'>Add Contact</button>
            </form>
        </div>
    )
}

export default AddContact