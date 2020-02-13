import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <div>
        <h1>Farmers Market</h1>
        <Link to="/">Combined</Link> | <Link to="/produce">Produce</Link> | <Link to="/schedule">Schedule</Link>
      </div>
  );
}

export default Header;
