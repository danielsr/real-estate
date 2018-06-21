import React, { Component } from 'react'
import { Houses } from './Houses'
import { Spinner } from '../Main/Spinner'
import { getList } from './ListHelper'

export class List extends Component {

  constructor(props) {
    super(props)

    this.state = {
      list: null,
    }
  }

  async componentDidMount() {
    const resultList = await getList()
    this.setState({ list: resultList.data })
  }

  render() {
    const { list } = this.state

    return list ? <Houses list={list} /> : <Spinner />
  }
}
