import React from 'react'
import './Productdate.css'

function Productdate(props) {

    const month = props.date.toLocaleString('en-US' , {month : 'long'});
    const day = props.date.toLocaleString('en-US' , {day: '2-digit'});
    const year = props.date.getFullYear();
  
    return (
        <div className='product—date'>
        <div className=' product-date_month'></div>
        <div classname = 'product-date_year'></div>
        <div className='product-date_day'></div>
        </div>
  )
}

export default Productdate

