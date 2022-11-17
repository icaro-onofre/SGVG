import React, { useState } from 'react';

import './style.css';

export default function Home() {
    return (
        <div>
          <text className="text-3xl font-bold">
            Hello World
          </text>
          <form>
            <label>
              Name:
              <input type="text" name="name"/>
            </label>
            <input type="submit" value="submit"/>
          </form>
        </div>
    )
}
