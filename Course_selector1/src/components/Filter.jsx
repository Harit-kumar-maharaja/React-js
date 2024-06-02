import React from 'react'

const Filter = ({filterdata}) => {
  return (
    <div>
      {filterdata.map((data) => {
        return(
        <button key={data.id}>
            {data.title}
        </button>
        )
      })}
    </div>
  )
}

export default Filter
