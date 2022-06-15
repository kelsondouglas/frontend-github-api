import React from "react";
import { Container } from "./styled";

const Repository = ({ repository }) => {
  const { name, description, full_name, html_url } = repository;
  return (
    <Container>
      <h4>{name}</h4>
      <p>{description}</p>
      <a href={html_url} target="_blank">
        Acessar Repositório {full_name}
      </a>
    </Container>
  );
};

export default Repository;
