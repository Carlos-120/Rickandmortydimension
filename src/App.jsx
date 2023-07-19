import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ErrorMessage from './components/ErrorMessage'
import Loading from './components/Loading'
import LocationFilter from './components/LocationFilter'
import LocationInfo from './components/LocationInfo'
import ResidentList from './components/ResidentList'
import getRandomNumber from './utils/getRandomNumber'



function App() {
  const [location, setLocation] = useState()
  const [locationName, setLocationName] = useState("126")
  const [showError, setShowError] = useState(false)

  const getDataDimension = (idDimension) => {
    if (idDimension && idDimension > 0 && idDimension <= 126) {
      const URL = `https://rickandmortyapi.com/api/location/${idDimension}`
      axios.get(URL)
        .then(res => {
          setTimeout(() => {
            setLocation(res.data)
            
          }, 3000)
        })
        .catch(err => {
          setShowError(true)
          setTimeout(() => {
            setShowError(false)
          }, 2000)

        })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor ingrese un valor.',
      });

    }

  }

  useEffect(() => {
    const randomDimenciones = getRandomNumber()
    getDataDimension(randomDimenciones)

  }, [])


  const handleSubmit = event => {
    event.preventDefault()
    setShowError(false)
    const dimensionSearch = event.target.serachValue.value
    getDataDimension(dimensionSearch)
  }

  const handleChangetInput = event => {
    setLocationName(event.target.value)
    setShowError(false)
  }

  const getNewLocation = (URL) => {
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))

  }

  return (
    <div className="App">

      {
        location ? (
          <>
            <div className='serach-value'>
              <img src="https://rickandmortywikijp.netlify.app/assets/Name.11783ee8.png" alt="Text Rick And Morty" />
              <form onSubmit={handleSubmit}>
                <input autoComplete='off' id='serachValue' type="text" onChange={handleChangetInput} value={locationName} placeholder='search your dimension' />
                <button className='button' type='submit'>Search</button>
                {showError ? <ErrorMessage /> : ""
                }
              </form>
            </div>

            <LocationFilter locationName={locationName} getNewLocation={getNewLocation} />
            <LocationInfo location={location} />
            <ResidentList location={location} />
          </>
        )
          :
          <Loading />
      }
    </div>
  )
}

export default App
