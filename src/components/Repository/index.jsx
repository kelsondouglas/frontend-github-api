import React from "react";
import { useUser } from "../../hooks/useUser";

const Repository = () => {
  const { user, loading, error } = useUser();

  return <div>Repository</div>;
};

export default Repository;
