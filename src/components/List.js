import React, { Component } from 'react'
import NumberItem from './NumberItem'
import './List.css'

export default class List extends Component {
  state = {
    nums: [1, 2, 3, 4]
  }

  remove = (num) => {
    this.setState(st => ({
      nums: st.nums.filter(n => n !== num)
    }))
  }

  render() {
    return (
      <div className="List">
        {this.state.nums.map((num, i) => (
          <NumberItem key={i} number={num} remove={this.remove}/>
        ))}
      </div>
    )
  }
}
