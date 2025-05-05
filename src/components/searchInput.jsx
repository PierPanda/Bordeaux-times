import React, { useState } from "react";
import { useSearchArticles } from "../services/api";

export default function SearchInput() {
  const [query, setQuery] = useState("Aucun article");
  const { articles, error, isLoading } = useSearchArticles(query);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Rechercher des articles..."
        value={query}
        onChange={handleInputChange}
        className="border p-2 rounded w-full"
      />
      {isLoading && <p className="text-gray-500 mt-2">Chargement...</p>}
      {error && <p className="text-red-500 mt-2">Erreur : {error.message}</p>}
      <ul className="mt-4">
        {articles.map((article) => (
          <li key={article.id} className="border-b py-2">
            <h3 className="font-bold">{article.title}</h3>
            <p>{article.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
