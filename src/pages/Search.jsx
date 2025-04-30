import { useFetch } from "../hooks/useFetch"
import { Card } from "../components/Card"
import { useSearchParams } from "react-router-dom";
import { useTitle } from "../hooks/useTitle";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q")
  const { data: movies } = useFetch(apiPath, queryTerm);
  
  useTitle(`Search result for ${queryTerm}`)

  return (
    <main className="dark:bg-gray-800">
      <section>
        <p className="max-w-7xl mx-auto pl-10 py-7 text-3xl  text-gray-700 dark:text-white">{movies.length ? `Result for '${queryTerm}'` : `No result found for '${queryTerm}'`}</p>
      </section>
      <section className="max-w-7xl mx-auto flex flex-wrap pl-10 items-stretch gap-6 py-7 justify-center sm:justify-evenly xl:justify-start">
        { movies.map((movie) => (
          <Card key={movie.id} movie={movie}/>
        )) }
      </section>
    </main>  
  )
}