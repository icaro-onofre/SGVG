import React, { Component } from 'react';

export default class index extends Component {
  render() {
    return (
      <a
        href={`/${this.props.route}`}
        className="flex items-center gap-3 my-5 hover:bg-black/[0.05] hover:dark:bg-dark_white/[0.05] p-2 rounded-lg ease-in duration-75 text-black dark:text-dark_white"
      >
        <i className={`ri-${this.props.icon}-${this.props.line ? 'line' : 'fill'} ri-lg text-black/[0.6] dark:text-dark_white/[0.6]`}></i>
        <h3 className="font-body">{this.props.category}</h3>
      </a>
    );
  }
}
