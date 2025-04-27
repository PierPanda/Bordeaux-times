import React from "react";
import { useAuth } from "../contexts/AuthProvider";

export default function ProfilPage() {
  const { user } = useAuth();

  console.log("ProfilPage user", user);

  return (
    <div>
      <h1 className="text-2xl font-bold">Profil</h1>
      <div>
        <p>Hello {user.firstName}</p>
      </div>
    </div>
  );
}
