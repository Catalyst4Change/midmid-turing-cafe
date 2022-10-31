import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      date: '',
      time: '',
      guests: ''
    }
  }

  updateRes = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  clearForm = () => {
    this.setState({
      name: '',
      date: '',
      time: '',
      guests: ''
    })
  }

  submitRes = (event) => {
    this.props.addRes(this.state)
    this.clearForm()
  }

  render() {
    return (
      <form className="submit-res">
        <input type='text' name="name" placeholder="Name" onChange={this.updateRes} value={this.state.name}></input>
        <input type='text' name="date" placeholder="Date" onChange={this.updateRes} value={this.state.date}></input>
        <input type='text' name="time" placeholder="Time" onChange={this.updateRes} value={this.state.time}></input>
        <input type='text' name="guests" placeholder="Number of Guests" onChange={this.updateRes} value={this.state.guests}></input>
        <button type='button' onClick={this.submitRes}>SUBMIT</button>
      </form>
    )
  }
}

export default Form