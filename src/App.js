import React from 'react';
import Titles from './components/Titles'
import Form from './components/Form'
import Weather from './components/Weather'
import './App.css';

const API_KEY = 'd37451dc514e7fb035ba3d90e7d46b50'

class App extends React.Component{

  getWeather = async () => {
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/find?q=London&appid=${API_KEY}`)
    const data = await api_call.json();
    console.log(data)
  }

 render(){
 return (
  <>
   <Titles/>
    <Form/>
    <Weather/>
  </>
  )
}}


export default App;
