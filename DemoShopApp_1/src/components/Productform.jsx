import React, { useState } from 'react'
import './Productform.css'

function Productform() {

    const [newtitle, settitle] = useState('')
    const [newdate, setdate] = useState('')

    function titlechangehandler(event , prevState){
        settitle(event.target.value)
    }
    function datechangehandler(event ){
        setdate(event.target.value)
    }

    function submithandler(event){
          event.preventDefault();
          const productdata = {
            title : newtitle,
            date : newdate
          };  
          console.log(productdata);

    }

  return (
    <form onSubmit={submithandler}>
      <div className='new-product-title'>
        <label>Title</label>
        <input type='text' onChange={titlechangehandler}></input>
      </div>
      <div className='new-product-date'>
        <label>Date</label>
        <input type='date' onChange={datechangehandler}></input>
      </div>
      <div className='new-product-button'>
        <button type='submit'>Add products</button>
      </div>
    </form>
  )
}

export default Productform
