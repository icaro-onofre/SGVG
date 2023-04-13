import React, { Component } from 'react';
import Input from 'components/Input';

export default class index extends Component {
  render() {
    return (
      <div className='w-1/4'>
        <Input type="text" placeholder="Usuário" leftIcon="user-fill" />
        <Input type="password" placeholder="Senha" leftIcon="lock-fill" rightIcon="eye-off-fill" />
      </div>
    );
  }
}
