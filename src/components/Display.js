import React, { Component } from 'react'

export default class Display extends Component {
    state = {
        name: this.props.name,
        address: this.props.address
      };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };
      
    render() {
    return (
      <div>
        <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
        <input type="text" name="address" value={this.state.address} onChange={this.handleChange} />
        <p>{this.state.name}</p>
        <p>{this.state.address}</p>
      </div>
    )
  }
}
