import { signOut } from "next-auth/react"
import Link from "next/link"
import NavLink from "./NavLink"

export default function NavBar()
{
  return (
    <div className="w-screen h-16 bg-teal-900 text-white">
      <div className="flex h-full m-auto items-center justify-between w-9/12">
        <Link href="/search" className="hover:text-green-500">
            Bulls🍿Movies
        </Link>
        <div className="flex items-center h-full">
          <NavLink link="/watch-list" title="Watch List" />
          <NavLink link="/search" title="Search" />
          <button className="px-3 h-full flex items-center rounded-sm hover:border-b-8 hover:border-b-green-500 hover:cursor-pointer" onClick={() => signOut({callbackUrl: "/"})}>Sign out</button>
        </div>
      </div>
    </div>
  )
}