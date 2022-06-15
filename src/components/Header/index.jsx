import React from "react";
import { HeaderContainer } from "./styled";
import { FaSun } from "react-icons/fa";

const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo">Git Finder</div>

      <button>
        <FaSun />
      </button>
    </HeaderContainer>
  );
};

export default Header;
