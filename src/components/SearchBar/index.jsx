import React, { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { Container } from "./styled";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { getUser } = useUser();

  function handleSubmit(e) {
    e.preventDefault();

    getUser(searchValue);
  }

  return (
    <Container onSubmit={handleSubmit}>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Buscar por usuário..."
      />

      <button>
        <BiSearch />
      </button>
    </Container>
  );
};

export default SearchBar;
