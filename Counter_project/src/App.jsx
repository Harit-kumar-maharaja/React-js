import { useState } from 'react'
import './App.css'

function App() {

  const[count , setcount] = useState(0);
  function decreasehandler(){
    setcount(count-1);
  }
  function increasehandler(){
    setcount(count+1);
  }
  function resethandler(){
    setcount(0); 
  }

  return (
    <div className='w-[90vw] h-[90vh] flex justify-center items-center bg-[#344151] flex-col gap-10'>
      <div className='text-[#c4baeb] font-medium text-2xl'>Increment and Decrement</div>
      <div className='bg-white flex justify-center gap-12 px-3 py-3 rounded-sm text-[25px] text-[#5f7187]'>
        <button onClick={decreasehandler}>
          -
        </button>
        <div>
          {count}
        </div>
        <button onClick={increasehandler}>
          +
        </button>
      </div>
      <button onClick={resethandler}>
        Reset
      </button>
    </div>
  )
}

export default App
