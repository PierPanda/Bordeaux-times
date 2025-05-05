import React from "react";
import { useParams } from "react-router";
import { FetchUniqArticles, FetchCommentsByArticle } from "../services/api";
import Loader from "../components/Loader";
import { useAuth } from "../contexts/AuthProvider";

export default function ArticlePage() {
  const { id } = useParams();
  const { user } = useAuth();

  const { article, articleError, articleLoading } = FetchUniqArticles(id);
  const { comments, commentsError, commentsLoading } =
    FetchCommentsByArticle(id);

  if (articleLoading || commentsLoading) {
    return <Loader />;
  }

  if (articleError) {
    return <p className="text-red-500">Erreur : {articleError.message}</p>;
  }

  if (commentsError) {
    return (
      <p className="text-red-500">
        Erreur lors du chargement des commentaires : {commentsError.message}
      </p>
    );
  }

  console.log("Article:", article);
  console.log("Comments:", comments);

  return (
    <div className="p-4">
      {article ? (
        <>
          <h1 className="text-2xl font-bold">{article.title}</h1>
          <p className="mt-4">{article.body}</p>
        </>
      ) : (
        <p className="text-gray-500">
          <Loader />
        </p>
      )}

      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4">Commentaires</h2>
        {comments?.comments?.length > 0 ? (
          <ul>
            {comments.comments.map((comment) => (
              <li
                key={comment.id}
                className={`border-b p-2 ${
                  comment.user.id === user?.id ? "bg-yellow-100" : ""
                }`}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`https://i.pravatar.cc/40?u=${comment.user.id}`}
                    alt="Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <h3 className="font-bold">{comment.user.username}</h3>
                </div>
                <p className="text-gray-700">{comment.body}</p>
                <p className="text-sm text-gray-500">
                  by <span className="font-bold">{comment.user.username}</span>{" "}
                  - {comment.likes} likes
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Aucun commentaire pour cet article.</p>
        )}
      </div>
    </div>
  );
}
