import { useState } from "react";
import Search from "./Search";

interface P {
  icon: string;
  tempc: number;
  tempf: number;
  feelc: number;
  feelf: number;
  text: string;
  humidity: number;
  wind: number;
  name: string;
  country: string
  loader: boolean
}

const Card = (props: P) => {
  const [toggle, setToggle] = useState(true)
  const { icon, tempc, tempf, feelc, feelf, text, humidity, wind, name, country, loader } = props

  return <>
    <div className="bg-gray-400 w-screen h-screen flex justify-center items-center">
      <div className="Card bg-gradient-to-r from-cyan-500 to-blue-500 w-[37rem] h-80 rounded-3xl">
        <div className="Logo"><img className="w-16 h-w-16" src="bglogo.png" alt="" /></div>

        <Search />


        {loader ? <div className="flex items-center justify-center font-semibold h-[60%]">Loading...</div> : <div className="data flex justify-evenly items-center mt-7">
          <img className="w-40 h-w-40 max-md:mx-[-13px]" src={icon} alt="" />
          <div className="flex flex-col items-center ">
            <h1 onClick={() => setToggle(!toggle)} className="cursor-pointer mb-2 text-5xl">{toggle ? `${tempc}°C` : `${tempf}°F`}</h1>
            <div className="flex flex-col text-center tracking-wide">
              <span className="text-sm font-medium">{toggle? `Feels Like ${feelc}°C`:`Feels Like ${feelf}°F`}</span>
              <span className="text-sm font-medium">{text}</span>
              <div className="font-black text-lg font-[cursive]">
                <span>{name}, </span>
                <span>{country}</span>
              </div>
            </div>

            <div className="flex gap-3 mt-4">

              <div className="Humidity flex items-center justify-center gap-1">
                <img className="w-8" src="humidity.svg" alt="" />
                <div className="leading-[7px]">
                  <p className="font-bold text-sm">{`${humidity}%`}</p>
                  <p className="text-[10px]">Humidity</p>
                </div>
              </div>

              <div className="Wind flex items-center justify-center gap-1">
                <img className="w-9" src="wind.svg" alt="" />
                <div className="leading-[7px]">
                  <p className="font-bold text-sm">{`${wind}km/h`}</p>
                  <p className="text-[10px] mx-[2px]">Wind Speed</p>
                </div>
              </div>

            </div>
          </div>
        </div>}
      </div>
    </div>
  </>
}

export default Card