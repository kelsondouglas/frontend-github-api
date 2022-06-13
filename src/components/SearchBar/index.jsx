import React, { useState } from "react";
import { useUser } from "../../hooks/useUser";
import { Container } from "./styled";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const { getUser } = useUser();

  return (
    <Container>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      <button
        onClick={() => {
          getUser(searchValue);
        }}
      >
        Buscar
      </button>
    </Container>
  );
};

export default SearchBar;
