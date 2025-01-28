import sunny from '../assets/images/sunny.png';
import rainy from '../assets/images/rainy.png';
import snowy from '../assets/images/snowy.png';
import cloudy from '../assets/images/cloudy.png';

const WeatherApp = () => {
  return (
    <div className="container">
        <div className="weather-app">
            <div className="search">
                <div className="search-top">
                    <i className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    </i>
                    <div className="location">
                        Košice
                    </div>
                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Enter Location" />
                    <i className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </i>
                </div>
            </div>
                <div className="weather">
                    <img src={sunny} alt="sunny" />
                     <div className="weather-type">Clear</div>
                     <div className="temp">28&deg;              
                     </div>
                </div>
                <div className="weather-date"><p>Fri, 3 May</p></div>
                <div className="weather-data">
                    <div className="humidity">
                        <div className="data-name">Humidity</div>
                        <i className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z"/></svg>
                        </i>
                        <div className="data">35%</div>
                    </div>
                    <div className="wind">
                        <div className="data-name">Wind</div>
                        <i className="icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c53 0 96-43 96-96s-43-96-96-96L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z"/></svg>                        
                        </i>
                        <div className="data">3 km/h</div>
                    </div>
                </div>
            </div>
        </div>
    
  )
}

export default WeatherApp