import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Styled components
const HeaderContainer = styled.header`
  background-color: #333;
  color: #fff;
  padding: 10px 0;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
    
  }

  li {
    margin-right: 20px;
  }

  a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #e74c3c;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/Schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/Gallery">Gallery</Link>
          </li>
          <li>
            <Link to="/Blog">Blog</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </Navigation>
    </HeaderContainer>
  );
};

export default Header;
