import React from 'react'

class Weather extends React.Component{
    render(){
        return(
            <>
                {this.props.city && this.props.country && <><p><span>Location: </span> {this.props.city},{this.props.country}</p><hr/></>}
                {this.props.temperature && <><p><span>Temperature: </span>{this.props.temperature} F</p><hr/></>}
                {this.props.humidity && <><p><span>Humidity: </span> {this.props.humidity}%</p><hr/></>}
                {this.props.description && <p><span>Conditions: </span> {this.props.description}</p>}
                {this.props.error && <p><span>Error: </span>{this.props.error}</p>}
            </>
        )
    }
}

export default Weather;