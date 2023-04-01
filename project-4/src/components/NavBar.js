import Link from "next/link"

export default function NavBar()
{
  return (
    <div className="w-screen py-5 bg-teal-900 text-white">
      <div className="flex m-auto items-center justify-between w-9/12">
        <Link href="/">
          <div>
            logo
          </div>
        </Link>
        <div>
          <Link href="/watch-list" className="bg-teal-600 px-3 py-1 rounded-sm hover:cursor-pointer hover:bg-teal-500">
            My Watch List
          </Link>
          <Link href="/login" className="px-3 py-1 hover:underline hover:cursor-pointer">
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  )
}