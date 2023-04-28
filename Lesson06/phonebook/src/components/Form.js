import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Form extends Component {
    static propTypes={addContact: PropTypes.func.isRequired}
    state = {
        name: '',
        phone: ''
    }

    onSubmit = (event) => {
        event.preventDefault();// sayfanın yeniden yenilenmesini engellemek için
        if (this.state.name===''||this.state.phone==='') {
            alert("Please fill all fields")
        }
        else{
            this.props.addContact(this.state)
            this.setState({ name: '', phone: '' })
        }
    }

    onChange=(event)=>{
        this.setState({[event.target.name]:event.target.value})
    }
    render() {
        return (
            <div className='FormComponent'>
                <form onSubmit={this.onSubmit}>
                    <input type='text' name='name' id='name' value={this.state.name} onChange={this.onChange} placeholder='Name' />
                    <input type='text' name='phone' id='phone' value={this.state.phone} onChange={this.onChange} placeholder='Phone' />
                    <button type='submit'>Add</button>
                </form>
            </div>
        )
    }
}

export default Form