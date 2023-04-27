import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LocationFilter = ({ locationName, getNewLocation }) => {
    const [locationsOptions, setLocationsOptions] = useState()

    useEffect(() => {
        if (!locationName) return setLocationsOptions()
        const URL = `https://rickandmortyapi.com/api/location?name=${locationName}`

        axios.get(URL)
            .then(res => {setLocationsOptions(res.data.results)})
            .catch(err => console.log(err))
    }, [locationName])
    const classValue = () => {
        if (locationName) {
          return "animation__list"
        }
        else {
          return ""
        }
      }
    
      const hiddenList = () => {
        if (!locationName) {
          return "hidden__list"
        }
        else {
          return ""
        }
      }
    return (
        <div className='content-ul'>
            <ul className={`ul-li ${hiddenList()}`}>
                {
                    locationsOptions?.map(locationsOption => (
                       <li className={classValue()} key={locationsOption.url}  onClick=
                         {(e) => {getNewLocation(locationsOption.url, locationsOption,
                            locationsOption.name )
                            setLocationsOptions()
                            e.target.parentNode.classList.add("hidden__list")
                        }
                        } >
                            {locationsOption.name}</li>
                ))
                }
            </ul>
        </div>

    )
}

export default LocationFilter