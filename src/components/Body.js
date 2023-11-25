import React, { Component } from 'react'
import Models from './Models'
import Items from './Items'

class Body extends Component {
  render() {
    return (
      <section className="main">
        <Models />
        <Items />
      </section>
    )
  }
}
export default Body