import Link from "next/link";
import { Article } from "@/utils/types";


interface ArticleItemProps {
    article: Article
}
export default function ArticleItem({article}:ArticleItemProps) {
  return (

        <div className="p-5 my-3 rounded-lg shadow-lg border-2 border-gray-400 
        hover:bg-slate-200 w-full md:w-2/5 lg:w-1/4 ">
          <h3 className="text-lg font-bold text-gray-900 line-clamp-1"> {article.title} </h3>
          <p className="my-2 text-xl text-gray-700 p-1 line-clamp-1">{article.body}</p>
          <Link className="bg-purple-700 text-xl hover:bg-purple-500 w-full block p-1 rounded-lg
          text-center text-white" href={`/articles/${article.id}`}>Read More</Link>

    </div>
  )
}
