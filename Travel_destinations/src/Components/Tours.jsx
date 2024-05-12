import React from 'react'
import Card from './Card'

function Tours(props) {   
  const { tours, removetour } = props;
  
  return (
    <div className='container'>
        <div>
        <h2 className='title'>PLAN WITH HK</h2>
        </div>
        <div className='cards'>
            {tours.map((tour) => (
                <Card key={tour.id} {...tour} removetour={removetour} />
            ))}
        </div>
    </div>
  )
}

export default Tours
