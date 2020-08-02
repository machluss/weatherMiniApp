import React from 'react'
import './ResultPanel.css'
import pressureImg from '../img/iconfinder_miscellaneous-24_809469.png'
import sunriseImg from '../img/iconfinder_weather-13_809987.png'
import sunsetImg from '../img/iconfinder_weather-14_809990.png'
import tempImg from '../img/iconfinder_weather-21_810005.png'
import windImg from '../img/iconfinder_weather-27_809997.png'
import calendarImg from '../img/iconfinder_calendar-clock_299096.png'

const ResultPanel = props => (
    <div className={props.className}>
        <p className='title'>Wyniki wyszukiwania dla miasta: <strong>{props.info.city}</strong></p>
        <div className='resultItem'><div className="imgWrap"><img src={calendarImg} alt="Calendar Icon" /> </div><p>{props.info.date}</p></div>
        <div className='resultItem'><div className="imgWrap"><img src={sunriseImg} alt="Sunride Icon" /> </div><p>{props.info.sunrise}</p></div>
        <div className='resultItem'><div className="imgWrap"><img src={sunsetImg} alt="Sunset Icon" /> </div><p>{props.info.sunset}</p></div>
        <div className='resultItem'><div className="imgWrap"><img src={tempImg} alt="Thermometer Icon" /> </div><p>{props.info.temp}&#176;C </p></div>
        <div className='resultItem'><div className="imgWrap"><img src={pressureImg} alt="Barometer Icon" /> </div><p>{props.info.pressure}hPa</p></div>
        <div className='resultItem'><div className="imgWrap"><img src={windImg} alt="Wind Icon" /> </div><p>{props.info.wind}m/s</p></div>
    </div>
)

export default ResultPanel


/*
const ResultPanel = props => (
    <div className='result'>
        <p className='title'>Wyniki wyszukiwania dla miasta: <strong>{props.info.city}</strong></p>
        <p>Data i godzina wyszukiwania: <strong>{props.info.date}</strong></p>
        <p>Wschód słońca o godz.: <strong>{props.info.sunrise}</strong></p>
        <p>Zachód słońca o godz.: <strong>{props.info.sunset}</strong></p>
        <p>Temperatura wynosi: <strong>{props.info.temp}&#176;C </strong></p>
        <p>Ciśnienie wynosi: <strong>{props.info.pressure}hPa</strong></p>
        <p>Predkość wiatru to: <strong>{props.info.wind}m/s</strong></p>
    </div>
    */