import React, {Component} from 'react';
import WeatherInfo from './components/weatherInfo'
import WeatherForm from './components/weatherForm'
import {WEATHER_KEY} from './keys' 

class App extends Component{ 

    state = {
        temperature: '',
        description: '',
        humidity:'',
        wind_speed:'',
        city:'',
        country:'',
        error:null
    };

    getWeather = async e => {
        e.preventDefault();


        const{city, country} = e.target.elements;
        const cityValue = city.value;
        const countryValue = country.value;
        console.log(cityValue, countryValue)
        
        if (cityValue && countryValue) {

            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue},${countryValue}&appid=${WEATHER_KEY}&units=metric`;
    
            const response = await fetch(API_URL);
    
            const data = await response.json();
    
            console.log(data)
    
    
            this.setState({
                temperature: data.main.temp,
                description: data.weather[0].description,
                humidity:data.main.humidity,
                wind_speed:data.wind.speed,
                city:data.name,
                country:data.sys.country,
                error:null
            }, ()=> console.log(this.state)) ;

        } else {
            this.setState({error: "Please enter a city and a country "})
        }
        

    } 
    render(){
        return (
                <div className="container p-6 w-100 mx-auto">
                    <div className="row">
                        <div className="col-md-4 mx-auto w-50">
                            
                            <WeatherForm getWeather={this.getWeather}/>
                            <WeatherInfo {...this.state}/>
                        </div>
                    </div>
                </div>
        )
    }
}

export default App;