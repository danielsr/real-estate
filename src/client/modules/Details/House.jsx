import React from 'react'

export const House = ({
  house: {
    address,
    postCode,
    description,
    price,
    photos,
    features,
  },
}) => (
  <div className="container grid p-3">
    <div className="col-12">
      <h1>{address}</h1>
      <p>{postCode}</p>
      <p>
        <b>{`${price.amount} ${price.compl}`}</b>
      </p>
    </div>
    <div className="col-8">
      <img alt="" className="photo" src={photos[0].large} />
    </div>
    <div className="col-4 extra">
      <div className="grid">
        {photos.map((photo, index) => (
          <div key={`photo_${index}`} className="col-6 pl-2 pb-2">
            <img alt="" className="photo" src={photo.thumb} />
          </div>
          ))}
      </div>
    </div>
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
