import React from 'react'
import reviews from './Data'

function App() {
  return (
    <div>
      <div>
        <h1>Our testimonials </h1>
        <div></div>
        <Testimonials reviews = {reviews} />
      </div>
    </div>
  )
}

export default App
