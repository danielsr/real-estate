import React, { Component } from 'react'

export class Photos extends Component {

  constructor(props) {
    super(props)

    this.state = {
      photoIndex: 0,
    }
  }

  showPhoto(photoIndex) {
    this.setState({ photoIndex })
  }

  render() {
    const { photos } = this.props
    const { photoIndex } = this.state

    return (
      <div className="col-12 grid">
        <div className="col-8">
          <img alt="" className="photo" src={photos[photoIndex].large} />
        </div>
        <div className="col-4 extra">
          <div className="grid">
            {photos.map((photo, index) => (
              <div key={`photo_${index}`} className="col-6 pl-2 pb-2">
                <img
                  alt=""
                  className="photo link"
                  src={photo.thumb}
                  onClick={() => this.showPhoto(index)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
