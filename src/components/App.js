import React from 'react';
import sunImg from '../img/sun.png';
import './App.css';
import InputForm from './InputForm'
import ResultPanel from './ResultPanel'

const APIkey = '83d15fcf884b859075d96f2fb8809931'

class App extends React.Component {
  state = {
    inputValue: '',
    city: '',
    date: '',
    sunrise: '',
    sunset: '',
    temp: '',
    wind: '',
    pressure: '',
    error: false,
    active: false
  }

  handleInputChange = e => {
    this.setState({
      inputValue: e.target.value,
      active: false
    })

  }

  handleSubmit = e => {
    e.preventDefault();
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.inputValue}&appid=${APIkey}&units=metric`;

    fetch(API)
      .then(response => {
        if (response.ok) return response.json()
        throw Error(response.status, response.statusText)
      })
      .then(data => {
        this.setState(() => ({
          city: this.state.inputValue.toLocaleUpperCase(),
          date: new Date().toLocaleString(),
          sunrise: new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
          sunset: new Date(data.sys.sunset * 1000).toLocaleTimeString(),
          temp: data.main.temp,
          wind: data.wind.speed,
          pressure: data.main.pressure,
          inputValue: '',
          error: false,
          active: true
        }))
      })
      .catch(error => {
        this.setState(() => ({
          error: true,
          city: this.state.inputValue
        }))
      })

  }

  render = () => {
    const erP = <p style={{
      lineHeight: '50px',
      fontSize: '16px',
      color: '#dd0606'
    }}>Podano błędną nazwę miasta: <strong>{this.state.city}</strong></p>
    const sun = <div className='sunImg'>
      <img src={sunImg} alt='Sun' />
    </div>

    return (
      <div className='wrap'>
        <div className="App">
          <InputForm
            value={this.state.inputValue}
            change={this.handleInputChange}
            submit={this.handleSubmit}
          />
          {!this.state.error ? this.state.city !== '' ? <ResultPanel
            className={this.state.active ? 'result active' : 'result'}
            inputValue={this.state.inputValue}
            info={this.state}
          /> : sun : erP}
        </div>
      </div>
    );

  }

}

export default App;
