import React, { Component } from 'react'
import axios from 'axios'
import { Houses } from './Houses'
import { Spinner } from '../Main/Spinner'

export class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: null,
    }
  }

  async componentDidMount() {
    const resultList = await axios.get('http://localhost:3000/api-list')
    this.setState({ list: resultList.data })
  }

  render() {
    const { list } = this.state

    return list ? <Houses list={list} /> : <Spinner />
  }
}
