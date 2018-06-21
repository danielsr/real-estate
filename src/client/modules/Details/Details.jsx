import React, { Component } from 'react'
import { House } from './House'
import { Spinner } from '../Main/Spinner'
import { getDetails } from './DetailsHelper'

export class Details extends Component {

  constructor(props) {
    super(props)

    this.state = {
      house: null,
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const resultDetails = await getDetails(id)
    this.setState({ house: resultDetails.data })
  }

  render() {
    const { house } = this.state

    return house ? <House house={house} /> : <Spinner />
  }
}
