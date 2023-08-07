import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

function NavBar() {
  const navigate = useNavigate();
  return (
    <nav>
      <ul>
        <li>
          <HashLink to="/">Home</HashLink>
        </li>
        <li>
          <HashLink to="#about-me"> About Me</HashLink>
        </li>
        <li>
          <HashLink to="#project"> Projects</HashLink>
        </li>
        <li>
          <HashLink to="#contacts"> Contacts</HashLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar