import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [
        {
          name: 'Anil',
          details: [
            {info: '8888'},
            {info: 'anil@gmail.com'},
            {info: 'noida'}
          ]
        },
        {
          name: 'Same',
          details: [
            {info: '7777'},
            {info: 'same@gmail.com'},
            {info: 'delhi'}
          ]
        },
        {
          name: 'Peter',
          details: [
            {info: '6666'},
            {info: 'peter@gmail.com'},
            {info: 'gurugram'}
          ]
        },
      ]
    }
  }
  render(){
    return (
      <div className="App">
        
      </div>
    )
  }
}

export default App;
