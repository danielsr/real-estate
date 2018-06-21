import React from 'react'
import { Photos } from './Photos'

export const House = ({ house: { address, postCode, description, price, photos, features } }) => (
  <div className="container grid p-3">
    <div className="col-12">
      <h1>{address}</h1>
      <p>{postCode}</p>
      <p>
        <b>{`€ ${price.amount.toLocaleString('nl-NL')} ${price.compl}`}</b>
      </p>
    </div>
    <Photos photos={photos} />
    <div className="col-8">
      <h3>Features</h3>
      <dl>
        {features.map((feature, index) => (
          <div key={`feature_${index}`}>
            <dt>{feature.title}</dt>
            <dd>{feature.info}</dd>
          </div>
        ))}
      </dl>
    </div>
    <div className="col-8 text">
      <h3>Description</h3>
      {description}
    </div>
  </div>
)
