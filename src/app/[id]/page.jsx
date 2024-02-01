import Link from "next/link";
import Form from "../../components/Form";

async function getShow() {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=all");
    if (!res.ok) {
        throw new Error("Failed to fetch data");
    }

    return res.json();
}
async function Page({ params }) {
    const data = await getShow();
    const {
        image,
        rating,
        summary,
        runtime,
        name,
        genres,
        language,
        premiered,
    } = data.filter((da) => da.show.id == +params.id)[0].show;

    return (
        <main className="min-h-screen">
            <Link className="m-8 block text-white" href={'/'}>{`<- Back`}</Link>
            
            <div className=" m-14 md:m-24 grid grid-cols-1 md:grid-cols-2  gap-8">
                <div
                    className=" col-span-1 rounded-2xl justify-items-stretch h-[50vh] md:h-[45vh] "
                    style={{
                        backgroundImage: `url(${image?.original})`,
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "cover",
                    }}></div>
                <div className="  text-white  mt-8">
                    <h2 className="card-title text-3xl mb-6">{name && name}</h2>

                    <div className="flex items-center gap-1 text-yellow-400 text-xl font-semibold my-3">
                        {rating?.average && rating.average}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                        <div className=" flex flex-col font-semibold gap-4">
                            <span>Runtime</span>
                            <span>Genres</span>
                            <span>Language</span>
                            <span>Premiered</span>
                        </div>
                        <div className="col-span-1 flex flex-col gap-4">
                            <span>: {runtime} min</span>
                            <span className="space-x-2">
                                :
                                {genres?.map((t, i) => (
                                    <span key={i}>{t}</span>
                                ))}
                            </span>
                            <span>: {language}</span>
                            <span>: {premiered}</span>
                        </div>
                    </div>
                    <div className=" mt-8">
                        <p className="border-l-4 border-blue-900  pl-2 text-2xl font-bold  py-4 mb-4 ">
                            Summary
                        </p>
                        <p className="h-fit text-justify">
                            {summary && summary.replace(/(<([^>]+)>)/gi, "")}
                        </p>
                        
                        
                    </div>
                <Form name={name}/>
                </div>
            </div>
        </main>
    );
}

export default Page;
