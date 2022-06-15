import React from "react";
import { useUser } from "../../hooks/useUser";
import { Container } from "./styled";

const Profile = () => {
  const { user } = useUser();

  return (
    <Container>
      {user && (
        <div className="user-avatar-data">
          <div className="avatar">
            <img src={user.avatar_url} alt="user avatar" />
          </div>
          <p> {user.name ? user.name : `Usuário não possui Nome`}</p>
          <br />
          <div className="avatar-user-info">
            <div className="box">
              <p> {user.followers}</p>
              <p>Seguidores </p>
            </div>
            <div className="box">
              <p> {user.following}</p>
              <p>Seguindo </p>
            </div>
            <div className="box">
              <p> {user.public_repos}</p>
              <p>Repositorios </p>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default Profile;
