import React, { Component } from 'react';

export default class index extends Component {
  render() {
    return <img className="rounded-full" src={this.props.image} alt="Avatar Icon" />;
  }
}
