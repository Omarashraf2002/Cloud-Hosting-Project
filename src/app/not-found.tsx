import Link from "next/link";


export default function NotFoundPage() {
  return (
    <section className="fix-height flex justify-center items-center flex-col my-3">
        <h1 className="text-7xl font-bold text-gray-700">404</h1>
        <p className="text-3xl text-gray-500 font-bold">
            Page is Not Found
        </p>
        <Link className="text-blue-500 font-bold underline" href="/">Go to Home Page</Link>
    </section>
  )
}
