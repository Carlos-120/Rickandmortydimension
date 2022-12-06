import axios from 'axios'
import React, { useEffect, useState } from 'react'


const ResidentCard = ({ urlResident }) => {

  const [resident, setResident] = useState()
  useEffect(() => {
    axios.get(urlResident)
      .then(res => setResident(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <article className='resident-card'>
      <header className='resident-card-header'>
        <img src={resident?.image} alt="" />
        <div className='resident-card_status'>
          <div className={`circle ${resident?.status}`}></div>
          <span>{resident?.status}</span>
        </div>
      </header>
      <section className='resident-card_body'>
        <h2>{resident?.name}</h2>
        <ul>
          <li><span>Specie:&nbsp;&nbsp;</span>{resident?.species}</li>
          <li><span>Origin:&nbsp;&nbsp;</span>{resident?.origin.name}</li>
          <li><span>Episodes where appear:&nbsp;&nbsp;</span>{resident?.episode.length}</li>
        </ul>
      </section>


    </article>
  )
}

export default ResidentCard