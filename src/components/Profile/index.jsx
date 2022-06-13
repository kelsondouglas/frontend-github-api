import React from "react";
import { useUser } from "../../hooks/useUser";

const Profile = () => {
  const { user, loading, error } = useUser();

  return <div>{error && <p>{error}</p>}</div>;
};

export default Profile;
