import Image from "next/image";
import Link from "next/link";

function Moviecard({data}) {
      const { score, show } = data;

  const { id, image, runtime, name, genres, language, premiered } = show;

  return (
      <div className=" flex  bg-base-100 rounded-2xl shadow-xl shadow-gray-900 overflow-hidden">
          <Image
              width={200}
              height={300}
              className=" flex-1 text-white"
              src={image?.medium}
              alt={name}
          />

          <div className="flex-1 p-4 md:p-6 lg:p-8 pt-10">
              <h2 className="  text-white mb-6">{name}</h2>
              <div className="grid grid-cols-2  text-gray-400 ">
                  <div className="col-span-1 flex flex-col font-semibold gap-8">
                      <span>Runtime</span>
                      <span className="hidden md:block">Genres</span>
                      <span>Language</span>
                      <span className="hidden md:block">Premiered</span>
                  </div>
                  <div className="col-span-1 flex flex-col flex-wrap gap-8">
                      <span>: {runtime} min</span>
                      <span className="space-x-2 hidden md:block">
                          {genres.map((t, i) => (
                              <span key={i}>{t}</span>
                          ))}
                      </span>
                      <span>: {language}</span>
                      <span className="hidden md:block">: {premiered}</span>
                  </div>
              </div>
              <div className=" ml-4 mt-12 bg-blue-500 w-24 flex justify-center rounded-full  text-gray-200 p-2">
                  <Link
                      href={`/${id}`}
                      className=" font-semibold hover:bg-transparent hover:text-white">
                      Details
                  </Link>
              </div>
          </div>
      </div>
  );
}

export default Moviecard
