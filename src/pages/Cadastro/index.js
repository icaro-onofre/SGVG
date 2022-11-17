import React, { useState } from 'react';

import './style.css';

export default function Home() {
    return (
        <div>
          <h1 className="text-3xl">
            Hello World
          </h1>
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
