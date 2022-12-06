import React from 'react'

const LocationInfo = ({ location }) => {

  return (
    <article className='dimencion'>
      <div className='title'>
        <h2 >{location?.name}</h2>
      </div>


      <div className='content-card '>
        <p><span>Type:&nbsp;&nbsp;</span>{location?.type}</p>
        <p><span>Dimension:&nbsp;&nbsp;</span>{location?.dimension}</p>
        <p><span>Population:&nbsp;&nbsp;</span>{location?.residents.length}</p>
      </div>
    </article>
  )
}

export default LocationInfo