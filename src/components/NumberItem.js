import React, { Component } from 'react'
import './NumberItem.css'

export default class NumberItem extends Component {
  handleClick = (n) => {
    this.props.remove(n)
  }

  render() {
    return (
      <div className="NumberItem">
        <h1>{this.props.number}</h1>
        <button onClick={() => this.handleClick(this.props.number)}>X</button>
      </div>
    )
  }
}
