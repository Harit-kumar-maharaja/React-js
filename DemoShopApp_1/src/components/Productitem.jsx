import React , {useState} from 'react'
import Productdate from './Productdate'
import Card from './Card'
import './Productitem.css'

function Productitem(props) {

  const [title , settitle] = useState(props.title)

  function clickhandler(){
    settitle("popcorn")
    console.log("Button clicked");
  }

  return (
    <Card className = 'product-item'>
        <Productdate date = {props.date}/>
        <div className='product-item_description'>
            <h2>{title}</h2>
        </div>
        <button onClick={clickhandler}>Add to cart</button>
    </Card>
  )
}

export default Productitem;

