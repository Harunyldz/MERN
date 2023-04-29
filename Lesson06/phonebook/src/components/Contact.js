import React, { Component } from 'react'
import List from './List'
import Form from './Form'

export class Contact extends Component {

  /**
   * contacts dizini içine ekleme yapacağımız için ve sadece bu alan render edilsin istediğimizden state olarak tanımladık
   *  */
  state = {
    contacts: [
      { name: "John", phone: "123-456-7890" },
      { name: "Jane", phone: "123-456-1234" },
      { name: "Joe", phone: "123-456-5678" }
    ]
  }


//formdaki yeni girdiyi newContact olarak addContact fonksiyonu ile contacts dizisine ekledik
  addContact = (newContact) => {
    this.setState({ contacts: [...this.state.contacts, newContact] })
  }

  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Phone Book</h1>
        <List contacts={this.state.contacts} />
        <Form addContact={this.addContact} /> 
      </div>
    )
  }
}

export default Contact