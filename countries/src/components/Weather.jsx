// const API_KEY ='35f1d565cf359238c9ad32b07b7a16dc'
const API_KEY='a5e6cc0eaf491a506367a98db434b685'
import { useEffect, useState } from 'react'
import axios from 'axios' 
const Weather = ({ country }) => {
    const [ data, setData ] = useState(null)

    const name = country.name.common.toLowerCase()

    // const lat = country.latlng[0] //latitude
    // const lng = country.latlng[1] //longitude

    const lat = country.capitalInfo.latlng[0]
    const lng = country.capitalInfo.latlng[1]

    useEffect(()=>{
        axios 
        // .get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,wind_speed_10m&wind_speed_unit=ms`)
        // .get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&appid=${API_KEY}`)
        // .get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&exclude=hourly,daily&units=imperial&appid=${API_KEY}`)
        .get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`)
        .then(response =>
            {
            console.log(response.data)
            setData(response.data) 
            }
        ).catch(error =>{
            console.log(error)
        })
    }, [])


    if(data){
        return(
            <div>
                <h2>Weather in {country.capital}, {country.name.common} </h2>
                <img src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}></img>
                <div>Temp: {data.main.temp} Celcius</div> 
                <div>Wind: {data.wind.speed} mph</div> 
            </div>
        )
    }
    return null

}
export default Weather