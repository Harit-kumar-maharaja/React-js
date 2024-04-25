import React from 'react'
import './Item.css'

function Item(props) {
  const itemname = props.name;
  return (
    <p>{itemname}</p>
  )
}

export default Item
