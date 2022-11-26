import Funcionario from '../../database/models/funcionarioModel.js';
import React, { useState } from 'react';
import './style.css';


console.log(Funcionario.find({}))

export default function Home() {
    return (
        <div>
          <div className="text-3xl font-bold">
            Hello World
          </div>
          <form>
            <label>
              Name:
              <input type="text" name="name"/>
            </label>
            <input type="submit" value="submit"/>
            <h2>
            </h2>
          </form>
        </div>
    )
}
