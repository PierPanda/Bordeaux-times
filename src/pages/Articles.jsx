import React from "react";
import { Link } from "react-router";
import { FetchAllArticles } from "../services/api";
import Loader from "../components/Loader";

export default function Articles() {
  const [page, setPage] = React.useState(1);
  const limit = 10;
  const skip = (page - 1) * limit;

  const { data, error, isLoading } = FetchAllArticles(limit, skip);

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <p className="text-red-500 font-bold text-center item-center">
        Erreur : {error.message}
      </p>
    );
  }

  const sortedArticles = data.posts.sort((a, b) => b.id - a.id);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Liste des articles</h1>
      <ul>
        {sortedArticles.map((article) => (
          <li key={article.id} className="border-b py-2 hover:px-4">
            <Link to={`/articles/${article.id}`}>
              <h3 className="font-bold">{article.title}</h3>
              <p>{article.body.substring(0, 100)}...</p>
              <div className="flex gap-4">
                <span> 👍🏻:{article.reactions.likes}</span>
                <span> 👎🏻:{article.reactions.dislikes}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="flex justify-center items-center gap-4 mt-4">
        <button
          onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
          disabled={page === 1}
          className="px-4 py-2 rounded font-bold underline cursor-pointer"
        >
          Back
        </button>
        <span>{page}</span>
        <button
          onClick={() =>
            setPage((prev) => (data.posts.length < limit ? prev : prev + 1))
          }
          disabled={data.posts.length < limit}
          className="px-4 py-2 rounded font-bold underline cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
}
