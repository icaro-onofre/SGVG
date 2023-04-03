import React, { useState, useEffect } from 'react';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <button
        className="text-3xl bg-red dark:bg-card_green"
        onClick={() => {
          setDarkMode(!darkMode);
        }}
      >
        Hello World
      </button>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <input type="submit" value="submit" />
        <i class="ri-admin-fill"></i>
      </form>
    </div>
  );
}
