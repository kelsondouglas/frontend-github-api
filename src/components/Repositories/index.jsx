import React from "react";
import { useUser } from "../../hooks/useUser";
import Profile from "../Profile";
import Repository from "../Repository";
import { Container } from "./styled";
import Loading from "../Helper/Loading";

const Repositories = () => {
  const { repositories, loading, error } = useUser();

  if (error) return <p>{error}</p>;
  if (loading) return <Loading />;
  if (repositories)
    return (
      <Container>
        <Profile />
        {repositories?.map((repository) => (
          <Repository key={repository.id} repository={repository} />
        ))}
      </Container>
    );
};

export default Repositories;
