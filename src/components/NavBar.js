import Link from "next/link"
import { useRouter } from "next/router"

import { signOut } from "next-auth/react"

export default function NavBar()
{
  //useRouter to update menu depending upon user location
  const router = useRouter();

  return (
    <div className="w-screen py-5 bg-teal-900 text-white">
      <div className="flex m-auto items-center justify-between w-9/12">
        <Link href="/">
          <div>
            logo
          </div>
        </Link>
        <div>
          <Link href={router.asPath == "/watch-list" ? "/" : "/watch-list"} className="bg-teal-600 px-3 py-1 rounded-sm hover:cursor-pointer hover:bg-teal-500">
            {router.asPath == "/watch-list" ? "Dashboard" : "My Watch List" }
          </Link>
          <button onClick={() => signOut({callbackUrl: "/login"})}
                  className="px-3 py-1 hover:underline hover:cursor-pointer">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  )
}