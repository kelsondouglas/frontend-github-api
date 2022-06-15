import React, { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { Container } from "./styled";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { getUser } = useUser();

  return (
    <Container>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Buscar por usuário..."
      />

      <button
        onClick={() => {
          getUser(searchValue);
        }}
      >
        <BiSearch />
      </button>
    </Container>
  );
};

export default SearchBar;
