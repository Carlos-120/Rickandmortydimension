import axios from 'axios'
import React, { useEffect, useState } from 'react'

const LocationFilter = ({ locationName, getNewLocation }) => {
    const [locationsOptions, setLocationsOptions] = useState()

    useEffect(() => {
        if (!locationName) return setLocationsOptions()
        const URL = `https://rickandmortyapi.com/api/location?name=${locationName}`

        axios.get(URL)
            .then(res => setLocationsOptions(res.data.results))
            .catch(err => console.log(err))
    }, [locationName])

    return (
        <div className='content-ul'>
            <h1 className='ul-li'>
                {
                    locationsOptions?.map(locationsOption => <li onClick={() => getNewLocation(locationsOption.url, locationsOption)} key={locationsOption.url}>{locationsOption.name}</li>)
                }
            </h1>
        </div>

    )
}

export default LocationFilter