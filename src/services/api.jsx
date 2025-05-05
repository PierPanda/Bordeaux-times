import useSWR from "swr";
import { useFetch } from "../hooks/useFetch";

export const LoginUser = async (username, password) => {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("Échec de l'authentification");
  }

  return response.json();
};

export const Delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const SearchArticles = (query) => {
  const { data, error, isLoading } = useSWR(
    query ? `https://dummyjson.com/posts/search?q=${query}` : null,
    useFetch
  );

  return {
    articles: data?.posts || [],
    error,
    isLoading,
  };
};

export const FetchAllArticles = (limit, skip) => {
  return useSWR(
    `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`,
    useFetch
  );
};

export const FetchUniqArticles = (id) => {
  const {
    data: article,
    error: articleError,
    isLoading: articleLoading,
  } = useSWR(id ? `https://dummyjson.com/posts/${id}` : null, useFetch);

  return {
    article,
    error: articleError,
    isLoading: articleLoading,
  };
};

export const FetchCommentsByArticle = (id) => {
  const {
    data: comments,
    error: commentsError,
    isLoading: commentsLoading,
  } = useSWR(`https://dummyjson.com/comments/post/${id}`, useFetch);

  return {
    comments,
    error: commentsError,
    isLoading: commentsLoading,
  };
};
