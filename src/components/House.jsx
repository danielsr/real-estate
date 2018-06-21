import React, { Component } from 'react'
import axios from 'axios'
import { Details } from './Details'
import { List } from './List'
import { Spinner } from './Spinner'

export class House extends Component {

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
        {house && <Details house={house} />}
        {list && <List list={list} />}
        {!house && !list && <Spinner />}
      </div>
    )
  }
}
