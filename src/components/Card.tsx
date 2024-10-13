import { useState } from "react";

interface P {
  icon: string;
  temp: number;
  tempf: number;
  text: string;
  humidity: number;
  wind: number;
}

const Card = (props: P) => {
  const [toggle, setToggle] = useState(true)
  const { icon, temp, tempf, text, humidity, wind } = props

  return <>
    <div className="bg-gray-400 w-screen h-screen flex justify-center items-center">
      <div className="card bg-gradient-to-r from-cyan-500 to-blue-500 w-[37rem] h-80 rounded-3xl">
        <div className="Logo"><img width={83} src="logo.png" alt="" /></div>

        <div className="search flex justify-center pt-6 relative">
          <div className="relative">
            <input className="px-4 py-[2px] pr-10 rounded-lg" type="text" placeholder="Search" />
            <svg className="absolute right-1 top-1/2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
              <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
            </svg>
          </div>
        </div>


        <div className="data flex justify-evenly items-center mt-7">
          <img width={150} src={icon} alt="" />
          <div className="flex flex-col items-center leading-10 ">
            <h1 onClick={() => setToggle(!toggle)} className="cursor-pointer text-5xl">{toggle ? `${temp}°C` : `${tempf}°F`}</h1>
            <span>{text}</span>
            <div className="flex gap-3">

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
        </div>
      </div>
    </div>
  </>
}

export default Card