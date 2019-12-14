import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css';

const API_KEY = 'd37451dc514e7fb035ba3d90e7d46b50'

class App extends React.Component{

  state = {
    temperature: undefined,
    city: undefined, 
    country: undefined, 
    humidity: undefined, 
    description: undefined, 
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault()
    const city = e.target.elements.city.value
    const country = e.target.elements.country.value
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/find?q=${city},${country}&appid=${API_KEY}`)
    const data = await api_call.json();
    console.log(data)
    this.setState({
      temperature: data.list[0].main.temp,
      city: data.list[0].name,
      country: data.list[0].sys.country,
      humidity: data.list[0].main.humidity,
      description: data.list[0].weather[0].description,
    })
  }

 render(){

 return (
  <>
   <Titles/>
    <Form getWeather={this.getWeather}/>
    <Weather 
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
    />
  </>
  )
}}


export default App;
