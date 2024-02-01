import Image from "next/image";
import MovieCard from "@/components/MovieCard";

async function getData() {
  const res = await fetch("https://api.tvmaze.com/search/shows?q=all")

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function Home() {
  const movies = await getData();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-10 md:p-24">
      <h1 className="font-bold leading-normal text-white text-5xl md:p-7 pb-2 text-center mb-20">
        Welcome to GS Cineplex
      </h1>
      
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 p-3">
        {movies.map((movie) => (
          <MovieCard key={movie.show.id} data={movie} />
        ))}
      </div>
    </main>
  );
}
