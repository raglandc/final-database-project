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
          <Link href="/watch-list" className="px-3 py-1 hover:underline hover:cursor-pointer">
            My List 
          </Link>
          <Link href="/login" className="bg-teal-300 text-black px-3 py-1 rounded-sm hover:cursor-pointer hover:bg-teal-400">
            Sign Out
          </Link>
        </div>
      </div>
    </div>
  )
}