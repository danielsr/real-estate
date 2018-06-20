import React, { Component } from 'react'
import axios from 'axios'

export class Details extends Component {

  constructor(props) {
    super(props)

    this.state = {
      house: {},
    }
  }

  async componentWillMount() {
    const result = await axios.get('http://localhost:3000/api')
    console.log(result.data)
  }

  render() {
    return (
      <div className="main">
        <div className="container grid p-3">
          <div className="col-12">
            <h1>Liendenhof 73</h1>
            <p>1108 HC Amsterdam</p>
            <p>
              <b>€ 1,400 p/mo....</b>
            </p>
          </div>
          <div className="col-8">
            <img className="photo" src="https://cloud.funda.nl/valentina_media/095/379/653_720x480.jpg" />
          </div>
          <div className="col-4 extra">
            <div className="grid">
              <div className="col-6 pl-2 pb-2">
                <img className="photo" src="https://cloud.funda.nl/valentina_media/095/379/653_720x480.jpg" />
              </div>
              <div className="col-6 pl-2 pb-2">
                <img className="photo" src="https://cloud.funda.nl/valentina_media/095/379/653_720x480.jpg" />
              </div>
              <div className="col-6 pl-2 pb-2">
                <img className="photo" src="https://cloud.funda.nl/valentina_media/095/379/653_720x480.jpg" />
              </div>
              <div className="col-6 pl-2 pb-2">
                <img className="photo" src="https://cloud.funda.nl/valentina_media/095/379/653_720x480.jpg" />
              </div>
              <div className="col-6 pl-2 pb-2">
                <img className="photo" src="https://cloud.funda.nl/valentina_media/095/379/653_720x480.jpg" />
              </div>
              <div className="col-6 pl-2 pb-2">
                <img className="photo" src="https://cloud.funda.nl/valentina_media/095/379/653_720x480.jpg" />
              </div>
              <div className="col-6 pl-2 pb-2">
                <img className="photo" src="https://cloud.funda.nl/valentina_media/095/379/653_720x480.jpg" />
              </div>
              <div className="col-6 pl-2 pb-2">
                <img className="photo" src="https://cloud.funda.nl/valentina_media/095/379/653_720x480.jpg" />
              </div>
            </div>
          </div>
          <div className="col-8">
            <h3>Features</h3>
            <dl>
              <dt>Type apartment</dt>
              <dd>Upstairs apartment (apartment)</dd>
              <dt>Living area</dt>
              <dd>72 m²</dd>
              <dt>Exterior space attached to the building</dt>
              <dd>3 m²</dd>
              <dt>Type apartment</dt>
              <dd>Upstairs apartment (apartment)</dd>
              <dt>Living area</dt>
              <dd>72 m²</dd>
              <dt>Exterior space attached to the building</dt>
              <dd>3 m²</dd>
              <dt>Type apartment</dt>
              <dd>Upstairs apartment (apartment)</dd>
              <dt>Living area</dt>
              <dd>72 m²</dd>
              <dt>Exterior space attached to the building</dt>
              <dd>3 m²</dd>
            </dl>
          </div>
          <div className="col-8 text">
            <h3>Description</h3>
            <p>Bright 2-bedroomed UNFURNISHED apartment of about 72 m2 on the third floor with a sunny balcony facing south with
            partly view on the Gaasperplas, a private parking on walking distance to the metro station! </p>
            <p>The apartment is recently refurbished with a new kitchen with built-in appliances, modern bathroom, laminated floors,
              new curtains, etcetera. The bright living room has beautiful view over the greeneries and water views of the
              neighborhood. Master bedroom is large and also the second bedroom -next to the living room- is very well sized.
            </p>
            <p>The apartment is recently refurbished with a new kitchen with built-in appliances, modern bathroom, laminated floors,
              new curtains, etcetera. The bright living room has beautiful view over the greeneries and water views of the
              neighborhood. Master bedroom is large and also the second bedroom -next to the living room- is very well sized.
            </p>
            <p>The apartment is recently refurbished with a new kitchen with built-in appliances, modern bathroom, laminated floors,
              new curtains, etcetera. The bright living room has beautiful view over the greeneries and water views of the
              neighborhood. Master bedroom is large and also the second bedroom -next to the living room- is very well sized.
            </p>

          </div>
          <div className="col-8">
            <img className="photo" src="https://www.jqueryscript.net/images/Show-Nearby-Places-jQuery-Google-Maps-WhatsNearby.jpg" />
          </div>
        </div>
      </div>
    )
  }
}
