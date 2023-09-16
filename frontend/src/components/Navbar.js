import React from "react";
import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";
import styled, { css } from "styled-components"; // Import styled from styled-components

import iconImage from '../assets/stats.png';

// Define a styled header component
const Header = styled.header`
  background: #fff;
`;

// Define a styled container component
const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #8b8b8b;
`;

// Define a styled image component
const StatIcon = styled.img`
  width: 8%;
  height: auto;
  margin-left: 5%;
`;

// Define a styled link component
const HomeLink = styled(Link)`
  margin-left: -15%;
  
  /* Add responsive styles for screens with a maximum width of 768px */
  @media screen and (max-width: 768px) {
    margin-left: -30%;
  }
`;

// Define a styled h1 component
const Wordle = styled.h1`
  margin-left: 10px;
`;

// Define a styled nav component
const Nav = styled.nav`
  display: flex;
  align-items: center;
  
  /* Add responsive styles for screens with a maximum width of 768px */
  @media screen and (max-width: 768px) {
    flex-wrap: wrap; /* Allow flex items to wrap to the next line */
  }
`;

// Define a styled button component
const Button = styled.button`
  background: #fff;
  color: var(--primary);
  border: 2px solid var(--primary);
  padding: 6px 10px;
  border-radius: 4px;
  font-family: "Poppins";
  cursor: pointer;
  font-size: 1em;
  margin-left: 10px;
  
  /* Add responsive styles for screens with a maximum width of 768px */
  @media screen and (max-width: 768px) {
    margin: 5px; /* Adjust margin for spacing */
  }
`;

// Define a styled anchor component for nav links
const NavLink = styled(Link)`
  margin-left: 10px;
  margin-right: 25px;
`;

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <Header>
      <Container>
        <div>
          <StatIcon src={iconImage} />
        </div>
        <HomeLink to="/">
          <Wordle>Wordle</Wordle>
        </HomeLink>
        <Nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <Button onClick={handleClick}>Log out</Button>
            </div>
          )}
          {!user && (
            <div>
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/signup">Signup</NavLink>
            </div>
          )}
        </Nav>
      </Container>
    </Header>
  );
};

export default Navbar;
