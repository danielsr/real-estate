import React, { Component } from 'react'
import axios from 'axios'
import { House } from './House'
import { List } from '../List/List'
import { Spinner } from '../Main/Spinner'

export class Details extends Component {

  constructor(props) {
    super(props)

    this.state = {
      house: null,
      list: null,
    }
  }

  async componentDidMount() {
    const resultList = await axios.get('http://localhost:3000/api-list')
    this.setState({ list: resultList.data })

    const { id } = this.props.match.params
    const resultDetails = await axios.get(`http://localhost:3000/api-details?id=${id}`)
    this.setState({ house: resultDetails.data })
  }

  render() {
    const { house, list } = this.state

    return (
      <div className="main">
        {house && <House house={house} />}
        {list && <List list={list} />}
        {!house && !list && <Spinner />}
      </div>
    )
  }
}
