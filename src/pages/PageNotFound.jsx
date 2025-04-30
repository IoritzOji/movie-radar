import { Link } from "react-router-dom"
import { useTitle } from "../hooks/useTitle";

export const PageNotFound = () => {
  useTitle("Page Not Found")

  return (
    <main className="dark:bg-gray-800 flex flex-col py-30 items-center">
      <p className="text-dark dark:text text-7xl font-bold dark:text-white mb-12">404, Oops!</p>
      <Link to="/"><button className="dark:bg-white dark:text-black bg-black text-white hover:bg-gray-800 p-3 cursor-pointer dark:hover:bg-gray-200 rounded">Back to Cinemate</button></Link>
    </main>
    
  )
}
