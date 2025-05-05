import React, { useState } from "react";
import { Link } from "react-router";
import { SearchArticles } from "../services/api";
import Loader from "../components/Loader";

export default function SearchInput() {
  const [query, setQuery] = useState("");
  const { articles, error, isLoading } = SearchArticles(query);

  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Rechercher un articles..."
        value={query}
        onChange={handleInputChange}
        className="border p-2 rounded w-full"
      />
      {isLoading && <Loader />}
      {error && <p className="text-red-500 mt-2">Erreur : {error.message}</p>}
      <ul className="mt-4">
        {articles.map((article) => (
          <Link to={`/articles/${article.id}`}>
            <li key={article.id} className="border-b py-2">
              <h3 className="font-bold">{article.title}</h3>
              <p>{article.body}</p>
              <div className="flex gap-4">
                <span> 👍🏻:{article.reactions.likes}</span>
                <span> 👎🏻:{article.reactions.dislikes}</span>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
