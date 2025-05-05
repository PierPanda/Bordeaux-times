export const useFetch = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Erreur lors de la récupération des données");
  }
  return response.json();
};
