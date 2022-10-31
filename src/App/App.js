import React, { Component } from 'react';
import Form from '../Form/Form';
import Reservations from '../Reservations/Reservations';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state= {
      reservations: [
        // {
        //   name: 'Cat',
        //   date: '10/31',
        //   time: '1200',
        //   guests: '17'
        // },
      ]
    }
  }

  componentDidMount = () => {
    fetch('http://localhost:3001/api/v1/reservations')
    .then((response) => response.json())
    .then((data) => this.setState({reservations: data}))
  }



  addRes = (reservation) => {
    fetch('http://localhost:3001/api/v1/reservations', {
      method: 'POST',
      headers: {},
      body: JSON.stringify({id: reservation.id, name: reservation.name, date: reservation.date, time: reservation.time, number: reservation.guests})
    })
    
    // this.setState({reservations: [...this.state.reservations, reservation]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form addRes={this.addRes}/>
        </div>
        <div className='resy-container'>
          <Reservations reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
