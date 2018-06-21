import React, { Component } from 'react'
import axios from 'axios'
import { House } from './House'
import { Spinner } from '../Main/Spinner'

export class Details extends Component {

  constructor(props) {
    super(props)

    this.state = {
      house: null,
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const resultDetails = await axios.get(`http://localhost:3000/api-details?id=${id}`)
    this.setState({ house: resultDetails.data })
  }

  render() {
    const { house } = this.state

    return house ? <House house={house} /> : <Spinner />
  }
}
