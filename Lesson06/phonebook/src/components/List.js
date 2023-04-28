import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class List extends Component {

    //Contact.js den gelen contacts verisinin gelmesini ve bu verinin dizi olma şartını koyduk.
static propTypes={contacts:PropTypes.array.isRequired}

state={filterText:'', filteredContacts:this.props.contacts}

onChangeFilterText =(event)=>{
    this.setState({filterText: event.target.value})
}

  render() {
        const filteredDatas=this.props.contacts.filter((item)=>{
            return item.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !==-1 ||
                    item.phone.toLowerCase().indexOf(this.state.filterText.toLowerCase()) !==-1
        })


    return (
      <div className='ListComponent'>
        <input type='text' name='filter' id='filter' placeholder='Filter by name or phone'
        value={this.state.filterText} onChange={this.onChangeFilterText}/>

        <ul>
            {this.props.contacts && filteredDatas.map((contact,index)=>{
                return <li key={index}>
                    <span>{contact.name}</span>
                    <span>{contact.phone}</span>
                </li>
            })}
        </ul>
      </div>
    )
  }
}

export default List