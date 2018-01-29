import React, { Component } from 'react'

export default class Lable extends Component {
  render() {
    return (
     <h1 style={{textAlign:"center"}}>{this.props.name}</h1>
    )
  }
}
