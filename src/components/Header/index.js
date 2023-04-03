import React, { Component } from 'react';
import Icon from '../Atoms/Icon';

export default class index extends Component {
  render() {
    return (
      <header className="bg-black/[.04] px-4 py-2 flex justify-between z-50">
        <div className="left flex items-center content-center gap-2">
          <Icon icon="menu" />
          <h2 className="font-heading font-bold">SGVG</h2>
        </div>
        <div className="right flex items-center content-center gap-2">
          <Icon icon="add-circle" />
          <Icon icon="logout-box-r" line />
        </div>
      </header>
    );
  }
}
