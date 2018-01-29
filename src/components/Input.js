import React, { Component } from 'react'

export default class Button extends Component {
  render() {
    return (
      <input type="text" value={this.props.value} id="txtName" onChange={this.props.onChange} />
    )
  }
}
