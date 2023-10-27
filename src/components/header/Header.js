import React from "react";

import './Header.css'

function Header() {
  return (
    <div>
      <header className="container header">
        <h1 data-cy-message="welcome-message">Welcome to Fun with Flags with Sheldon Cooper</h1>
      </header>
    </div>
  );
}

export default Header;
