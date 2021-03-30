import React, { Component } from 'react'
import './NumberItem.css'

export default class NumberItem extends Component {
  handleRemove = (n) => {
    this.props.remove(n)
  }

  render() {
    console.log(this.props);
    return (
      <div className="NumberItem">
        <h1>{this.props.number}</h1>
        <button onClick={() => this.handleRemove(this.props.id)}>X</button>
      </div>
    )
  }
}
