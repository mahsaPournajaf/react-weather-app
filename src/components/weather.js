import React from 'react';



const Weather = (props) => {
    return(


        
        
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-8 ">
            <div className="weather_card">
            <h1 className="weather_title">{props.city}</h1>
            <div className="weather_degrees">
            <i className={`wi ${props.weathericon} display-1`}></i>
         <h1>{props.celsius}&deg;</h1>

                
            </div>
            <div className="weather_type">
                <h3>{props.description}</h3>
            </div>
            {minmaxTemp(props.temp_min, props.temp_max)}
                   <div className="speed central"><span>wind speed:</span><span>{props.wind_speed}</span></div>

  <div className="humidity central"><span>humidity:</span><span>{props.humidity}</span></div>
          
            </div>
            </div>
        </div>   
        </div>   
    )
}


function minmaxTemp(min,max){
    if (max && min) {
    return(
        <div className="minMax">
            <span>min temp:{min}&deg;</span>
            <span>max tem:{max}&deg;</span>
        </div>
    )
    }
}

export default Weather