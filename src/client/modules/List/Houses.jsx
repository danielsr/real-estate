import React from 'react'
import { Link } from 'react-router-dom'

export const Houses = ({ list }) => (
  <div className="container grid p-3">
    {list.map((house, index) => (
      <Link to={`/${house.id}`} key={`house_${index}`} className="col-4 pl-2 pb-2">
        <img alt="" className="photo" src={house.photo} />
        <h3>{house.address}</h3>
      </Link>
    ))}
  </div>
)
