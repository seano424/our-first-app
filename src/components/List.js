import React, { Component } from 'react'
import NumberItem from './NumberItem'
import './List.css'

export default class List extends Component {
  state = {
    nums: [1, 2, 3, 4, 4, 4]
  }

  remove = (id) => {
    this.setState(st => ({
      nums: st.nums.filter((n, idx) => idx !== id)
    }))
  }

  render() {
    return (
      <div className="List">
        {this.state.nums.map((num, idx) => (
          <NumberItem key={idx} id={idx} number={num} remove={this.remove}/>
        ))}
      </div>
    )
  }
}
