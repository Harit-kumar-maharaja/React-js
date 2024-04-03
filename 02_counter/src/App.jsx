import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15);


  const addvalue = () =>{
    
    if ( counter < 50) {
              setCounter (prevcounter => prevcounter+1)
              setCounter (prevcounter => prevcounter+1)
              setCounter (prevcounter => prevcounter+1)
              setCounter (prevcounter => prevcounter+1)
            }
    console.log("value added : " , counter);
  }
  const removevalue = () =>{
    if (counter > 0 ) setCounter( counter -1)
  }

  return (
    <>
      <h1>Chai aur react || Harit kumar</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Add value : {counter}</button>
      <br />
      <br />
      <button onClick = {removevalue}>Remove value : {counter}</button>
    </>
  )
}     

export default App