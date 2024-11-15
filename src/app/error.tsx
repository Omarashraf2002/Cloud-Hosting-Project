"use client"

import Link from "next/link"
interface ErrorPageProps {
    error: Error;
    reset: () => void
}

export default function errorPage({error,reset}: ErrorPageProps) {
  return (
    <div className=" fix-height text-center pt-7">
        <div className="text-center font-bold text-3xl text-red-500">
            Something went Wrong
        </div>
        <h2 className="text-xl text-gray-700 my-3">
            Error message: {error.message}
        </h2>
        <button onClick={()=> reset()} className="bg-blue-500 hover:bg-blue-700 rounded-full p-3 text-xl font-bold hover:text-white">
            Try again
        </button>
        <Link className="text-xl underline text-blue-700 block mt-6" href="/">Go to Home Page</Link>
    </div>
  )
}
