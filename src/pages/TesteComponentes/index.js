import React, { Component } from 'react';
import Header from 'components/Header';
import Navbar from 'components/Navbar';

export default class index extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navbar name="Jefferson Silva" email="jefferson.tsilva@gmail.com" image="https://placehold.co/64x64"/>
      </div>
    );
  }
}
