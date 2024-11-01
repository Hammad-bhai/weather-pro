import { useContext, useEffect, useState } from "react"
import { SearchContext } from "../context/searchContext"
import axios from "axios"

interface T {
    display_name: string
}

const Search = () => {
    const { setQuery } = useContext(SearchContext)!
    const [data, setData] = useState('')
    const [result, setResult] = useState<T[] | null>(null)

    useEffect(() => {
        if (data.length >= 2) {
            const timer = setTimeout(() => {
                fetch()
            }, 100);
            return () => clearTimeout(timer)
        }

    }, [data])


    const fetch = async () => {
        try {
            const res = await axios(`https://us1.locationiq.com/v1/autocomplete.php?key=pk.dba9d94a676f3a926701ddcf34ce7a59&q=${data}&format=json`)
            setResult(res.data)

        } catch (error) {
            console.log(error);

        }
    }

    const handleQuery = (e: string) => {
            setQuery(e)
            setData('')            
            setResult(null)
    }

    const handleIcon = () => {
        if (data.length > 2) {
            setQuery(data)
            setData('')
            setResult(null)
        }
    }

    return <>
        <div className="Search flex justify-center relative">
            <div className="relative">
                <input onChange={(e) => setData(e.target.value)} value={data} className="px-4 py-[2px] pr-10 rounded-lg" type="text" placeholder="Search" />
                <svg onClick={handleIcon} className="absolute cursor-pointer right-1 top-1/2 transform -translate-y-1/2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0 0 30 30">
                    <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"></path>
                </svg>
            </div>

            {result && data && <ul className="absolute bg-white md:top-8 top-8 md:w-60 w-[273px] min-h-16 max-h-56 overflow-auto">
                {result && result.map((item, index) => {
                    return <li onClick={() => handleQuery(item.display_name)} key={index} className="p-1 cursor-pointer hover:bg-slate-200">
                        <span>{item.display_name}</span>
                    </li>
                })}
            </ul>}
        </div>
    </>
}

export default Search