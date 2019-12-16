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
    const api_call = await fetch(`https://api.openweathermap.org/data/2.5/find?q=${city},${country}&appid=${API_KEY}&units=imperial`)
    const data = await api_call.json();
    if (city && country && data.count !== 0){
    this.setState({
      temperature: data.list[0].main.temp,
      city: data.list[0].name,
      country: data.list[0].sys.country,
      humidity: data.list[0].main.humidity,
      description: data.list[0].weather[0].description,
       }
    )
  } else {
    this.setState({
      temperature: undefined,
      city: undefined,
      country: undefined,
      humidity: undefined, 
      description: undefined,
      error: "Please enter a real city and country."
    })
  }
}

 render(){

 return (
  <div className='grid'>
    <div className='mainWindow'>
      <div className='mainVisual'/>
      <div className='weatherFetchContent'>
   <Titles/>
    <Form getWeather={this.getWeather}/>
    <Weather 
      temperature={this.state.temperature}
      city={this.state.city}
      country={this.state.country}
      humidity={this.state.humidity}
      description={this.state.description}
      error={this.state.error}
    />
      </div>
    </div>
  </div>
  )
}}


export default App;
