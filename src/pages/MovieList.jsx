import { useFetch } from "../hooks/useFetch"
import { Card } from "../components/Card"
import { useTitle } from "../hooks/useTitle";

export const MovieList = ({ apiPath, title }) => {
  const { data: movies } = useFetch(apiPath);

  useTitle(title)

  return (
    <main className="dark:bg-gray-800 flex items-center justify-center">
      <section className="max-w-7xl mx-auto flex flex-wrap md:pl-10 items-stretch gap-6 py-7 justify-center sm:justify-evenly xl:justify-start">
        { movies.map((movie) => (
          <Card key={movie.id} movie={movie}/>
        )) }
      </section>
    </main>  
  )
}
