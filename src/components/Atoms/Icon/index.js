import React, { Component } from 'react';

export default class index extends Component {
  render() {
    return (
      <div className="w-8 h-8 flex justify-center items-center rounded-lg cursor-pointer hover:bg-black/[0.08] ease-in duration-75">
        <i className={`ri-${this.props.icon}-${this.props.line ? 'line' : 'fill'} ri-lg `}></i>
      </div>
    );
  }
}
