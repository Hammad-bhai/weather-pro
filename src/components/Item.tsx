import axios from "axios"
import { useEffect, useState } from "react"
import Card from "./Card"
import Spinner from "./Spinner";

interface Condition{
    text: string
    icon: string;
}
interface W {
    temp_c: number
    condition: Condition;
    humidity: number;
    wind_kph: number;
    temp_f: number;
}

const Item = () => {
const [weather, setWeather] = useState<W | null>(null)

    useEffect(() => {
      fetch()
    }, [])
    

    const fetch = async (): Promise<void> => {
       try {
         const res = await axios(`https://api.weatherapi.com/v1/forecast.json?key=2206668c082c4f88b72110140241210&q=karachi&days=7`)
         const data = await res.data
         setWeather(data.current)
         
       } catch (error) {
        console.log(error);
       }   
    }

  return <>
    <div className="">
        {weather ? <Card icon={weather.condition.icon} temp={weather.temp_c} tempf={weather.temp_f} text={weather.condition.text} humidity={weather.humidity} wind={weather.wind_kph}/> : <Spinner />}
    </div>
  </>
}

export default Item