import React, { Suspense } from "react";
import SearchInput from "../components/searchInput";
import Loader from "../components/Loader";

export default function Home() {
  return (
    <div>
      <div className="my-4">
        <h1 className="text-2xl font-bold text-center">
          Rechercher un articles
        </h1>
        <Suspense fallback={<Loader />}>
          <SearchInput />
        </Suspense>
      </div>
    </div>
  );
}
