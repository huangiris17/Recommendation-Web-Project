import React from "react";
import UsersList from "../components/UsersList";

function User() {
  const USERS = [
    {
      id: "u1",
      image:
        "https://www.loudegg.com/wp-content/uploads/2020/10/Bart-Simpson.jpg",
      name: "Iris",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
}

export default User;
