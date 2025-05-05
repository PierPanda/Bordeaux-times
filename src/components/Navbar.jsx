import React from "react";
import { Link } from "react-router";
import { useAuth } from "../contexts/AuthProvider";
import Logo from "../assets/logo.png";

export default function Navbar() {
  const { isAuthenticated, logout, user } = useAuth();

  return (
    <nav className="bg-black text-white shadow-md">
      <div className="px-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold">
              <img src={Logo} alt="Logo" width={"75px"} />
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
                <Link
                  to="/profile"
                  className="ml-4 text-white flex justify-center items-center gap-4"
                >
                  Profil
                  {user.id === user?.id && (
                    <img
                      src={`https://i.pravatar.cc/40?u=${user.id}`}
                      alt="Avatar"
                      className="w-10 h-10 rounded-full"
                    />
                  )}
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
