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

  addRes = (reservation) => {
    this.setState({reservations: [...this.state.reservations, reservation]})
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
