import { useState } from 'react'
import './App.css'
import data from './Data'
import Tours from './Components/Tours'

function App() {

  const [tours , settours] = useState(data)

  function removetour(id){
    const newtours = tours.filter(tour => tour.id !==id);
    settours(newtours);
  }

  if(tours.length === 0){
    return(
      <div className='refresh'>
        <h2>No Tours Left</h2>
        <button className='btn-white' onClick={() => settours(data)}>
          Refresh Content
        </button>
      </div>
    )
  }

  return (
    <div className='App'>
      <Tours tours = {tours} removetour =  {removetour}>
      </Tours>
    </div>
  )
}

export default App
