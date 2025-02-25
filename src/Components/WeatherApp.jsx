import sunny from '../assets/images/sunny.png';
import rainy from '../assets/images/rainy.png';
import snowy from '../assets/images/snowy.png';
import cloudy from '../assets/images/cloudy.png';
import loaderGif from '../assets/images/loading.gif';
import {  useMemo, useState } from 'react';




const WeatherApp =  () => {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY
    const [data,setData] = useState({})
    const [city,setCity] = useState('')
    const [loading, setLoading] = useState(false);
    const weatherImages = {
        Clear : sunny,
        Clouds : cloudy,
        Rain: rainy,
        Snow : snowy,
        Haze : cloudy,
        Mist : cloudy,
    }
    const weatherImage = data.weather ? weatherImages[data.weather[0].main] : sunny;

    const weatherTypesSlovak = {
        Clear : 'Jasno',
        Clouds : 'Oblačno',
        Rain: 'Dážď',
        Snow : 'Sneženie',
        Haze : 'Hmla',
        Mist : 'Hmla',
    }

    const weatherTypeSlovak = data.weather ? weatherTypesSlovak[data.weather[0].main] : 'Slnečno';

    const backgroundImages = {
        Clear: 'linear-gradient(to right, #f3b07c, #fcd283)',
        Clouds: 'linear-gradient(to right, #57d6d4, #71eeec)',
        Rain: 'linear-gradient(to right, #5bc8fb, #80eaff)',
        Snow: 'linear-gradient(to right, #aff2ff, #fff)',
        Haze: 'linear-gradient(to right, #57d6d4, #71eeec)',
        Mist: 'linear-gradient(to right, #57d6d4, #71eeec)',
    }
    const backgroundImage = data.weather ? backgroundImages[data.weather[0].main] : 'linear-gradient(to right, #f3b07c, #fcd283)';

   useMemo (async () =>
    {
        setLoading(true);
        console.log('loading true')
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Kosice&appid=${api_key}&units=metric`
        const response = await fetch(url);
        const searchData = await response.json();              
        setData(searchData) 
        setLoading(false);  
        console.log('loading false')        
    },[]);

    const currentDate = new Date();
    const niceDate= currentDate.toLocaleString('sk-SK', {day:'numeric', month: 'long', year : 'numeric' });
    const weekDay = currentDate.toLocaleString('sk-SK', {weekday: 'long'});
 


    const search = async () => {
        if (city.trim() !== '')
        {          
            // const city_name='London'
            setLoading(true);
            console.log('loading true')
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`
            const response = await fetch(url);
            const searchData = await response.json();
            if (searchData.cod !== 200){
                setData({notFound:true})
            }
            else{
                setData(searchData)
                setCity('')
            }
               setLoading(false);  
        console.log('loading false') 
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          e.preventDefault();
          search();
        }
      };

    return (
    <div className="container" style={{backgroundImage}}>
        
        <div className="weather-app" style={{backgroundImage : backgroundImage && backgroundImage.replace && backgroundImage.replace('to right','to top') }}>
            <div className="search">
                <div className="search-top">
                    <i className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                    </i>
                    <div className="location">
                        {data.name}
                    </div>
                </div>
                <div className="search-bar">
                    <input 
                        type="text" 
                        placeholder="Mesto" 
                        value={city} 
                        onChange={e => setCity(e.target.value)}
                        onKeyDown={handleKeyDown}/>
                    {/* lupa */}
                    <i className="icon" onClick={search}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
                    </i>
                </div>
            </div>
            {loading && (<img className='loader' src={loaderGif} alt='loading'/>)}
            {!loading && data.notFound && (<div className='not-found'>Nenájdené 😉</div>)}
            {!loading && !data.notFound && (<><div className="weather">
                        <img src={weatherImage} alt="weather-image" />
                        <div className="weather-type">{weatherTypeSlovak}</div>
                        <div className="temp">{data.main && `${Math.round(data.main.temp)}°`}
                        </div>
                    </div><div className="weather-date"><p>{weekDay}, {niceDate}</p></div><div className="weather-data">
                            <div className="humidity">
                                <div className="data-name">Vlhkosť</div>
                                <i className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M192 512C86 512 0 426 0 320C0 228.8 130.2 57.7 166.6 11.7C172.6 4.2 181.5 0 191.1 0l1.8 0c9.6 0 18.5 4.2 24.5 11.7C253.8 57.7 384 228.8 384 320c0 106-86 192-192 192zM96 336c0-8.8-7.2-16-16-16s-16 7.2-16 16c0 61.9 50.1 112 112 112c8.8 0 16-7.2 16-16s-7.2-16-16-16c-44.2 0-80-35.8-80-80z" /></svg>
                                </i>
                                <div className="data">{data.main && `${data.main.humidity}%`}</div>
                            </div>
                            <div className="wind">
                                <div className="data-name">Vietor</div>
                                <i className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M288 32c0 17.7 14.3 32 32 32l32 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128c-17.7 0-32 14.3-32 32s14.3 32 32 32l320 0c53 0 96-43 96-96s-43-96-96-96L320 0c-17.7 0-32 14.3-32 32zm64 352c0 17.7 14.3 32 32 32l32 0c53 0 96-43 96-96s-43-96-96-96L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32zM128 512l32 0c53 0 96-43 96-96s-43-96-96-96L32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0c-17.7 0-32 14.3-32 32s14.3 32 32 32z" /></svg>
                                </i>
                                <div className="data">{data.wind && `${Math.round(data.wind.speed)}km/h`} </div>
                            </div>
                        </div></>)}
            </div>
        </div>
    
  )
}

export default WeatherApp