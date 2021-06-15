import React from 'react'

const WeatherFrom = props => (
    <div className="card card-body" >
    <h2>Wheather App <br></br>with API & React</h2>
        <form onSubmit={props.getWeather} className="w-100">
            <div className="form-group">
              <input type="text" name="city" placeholder="Your City Name" className="form-control" autoFocus/>
            </div>

            <div className="form-group">              
              <input type="text" name="country" id="country" className="form-control" placeholder="Your Country Name"/>          
            </div>

            <button className="btn btn-success btn-block w-100">
                Get Weather
            </button>
        </form>

            
    </div>
);

export default WeatherFrom;