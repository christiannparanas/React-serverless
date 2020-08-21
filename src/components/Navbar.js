import React from "react";
import { Link } from "react-router-dom";
import {
  StyledNavbar,
  StyledNavBrand,
  StyledNavItems,
  StyledLink,
} from "../styled/Navbar";
import { Accent } from "../styled/Accent"; 

export default function Navbar() {
  return (
    <StyledNavbar>
      <StyledNavBrand>
        <Link to="/">
          Learn.Build.<Accent>Type.</Accent>
        </Link> 
      </StyledNavBrand>
      <StyledNavItems>
        <li>
          <StyledLink to="/">Home</StyledLink>
        </li>
        <li>
          <StyledLink to="/highscores">highscores</StyledLink>
        </li>
      </StyledNavItems>
    </StyledNavbar>
  );
}
