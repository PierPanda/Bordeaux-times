import React from "react";
import { Link } from "react-router";
import { useAuth } from "../contexts/AuthProvider";

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              <h1>Bordeaux Times Logo</h1>
            </Link>
          </div>
          <div className="flex items-center">
            <Link to="/" className="text-white">
              Accueil
            </Link>
            <Link to="/articles" className="ml-4 text-white">
              Articles
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="ml-4 text-white">
                  Profil
                </Link>
                <button
                  onClick={logout}
                  className="ml-4 rounded bg-red-500 px-3 py-1 text-white"
                >
                  Déconnexion
                </button>
              </>
            ) : (
              <Link to="/login" className="ml-4 text-white">
                Connexion
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
