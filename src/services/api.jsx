import useSWR from "swr";
import { useFetch } from "../hooks/useFetch";

export const loginUser = async (username, password) => {
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

export const useSearchArticles = (query) => {
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
