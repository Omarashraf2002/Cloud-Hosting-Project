import { Article } from "@/utils/types";

interface SingleArticlePageProps {
    params: {id: string}
}
const SingleArticlePage = async ({params}: SingleArticlePageProps) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    if(!response.ok) {
        throw new Error("Failed to fetch article")
    }
    const article:Article = await response.json()
  return (
      <section className="container m-auto w-full px-5 pt-8 md:w-3/4">
        <div className="bg-white p-7 rounded-lg">
            <h1 className="text-3xl text-gray-700 font-bold text-center mb-2">{article.title}</h1>
            <div className="text-gray-400 text-center">14/1/2002</div>
            <p className="text-gray-800 text-center text-bold text-xl mt-5">{article.body}</p>
        </div>
    </section>
  )
}
export default SingleArticlePage
