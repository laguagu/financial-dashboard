/**
 * v0 by Vercel.
 * @see https://v0.dev/t/pD0v0iiJEPO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900">
      <h1 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mt-4">404</h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
        Sorry, we couldnt find the page youre looking for.
      </p>
      <Link
        className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300 mt-6"
        href="#"
      >
        Return to Homepage
      </Link>
    </div>
  )
}