import axios from "axios"
import { useContext, useEffect, useState } from "react"
import Card from "./Card"
import Spinner from "./Spinner";
import { SearchContext } from "../context/searchContext";

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
interface L {
  name: string
}

const Item = () => {
const [weather, setWeather] = useState<W | null>(null)
const [location, setLocation] = useState<L | null>(null)
const {query} = useContext(SearchContext)!

    useEffect(() => {
      fetch()
    }, [query])
    

    const fetch = async (): Promise<void> => {
       try {
         const res = await axios(`https://api.weatherapi.com/v1/forecast.json?key=2206668c082c4f88b72110140241210&q=${query}&days=7`)
         const data = await res.data
         setWeather(data.current)
         setLocation(data.location)
         
       } catch (error) {
        console.log(error);
       }   
    }

  return <>
    <div className="">
        {weather && location ? <Card icon={weather.condition.icon} temp={weather.temp_c} tempf={weather.temp_f} text={weather.condition.text} humidity={weather.humidity} wind={weather.wind_kph} location={location.name}/> : <Spinner />}
    </div>
  </>
}

export default Item