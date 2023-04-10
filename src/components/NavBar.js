import { signOut } from "next-auth/react"
import Link from "next/link"
import NavLink from "./NavLink"

export default function NavBar()
{
  return (
    <div className="w-screen h-16 bg-teal-900 text-white">
      <div className="flex h-full m-auto items-center justify-between w-9/12">
        <Link href="/" className="hover:text-green-500">
            Bulls🍿Movies
        </Link>
        <div className="flex items-center h-full">
          <NavLink link="/watch-list" title="Watch List" />
          <NavLink link="/" title="Dashboard" />
          <NavLink link="/login" title="Sign Out" onClick={() => signOut({callbackUrl: "/login"})} />
        </div>
      </div>
    </div>
  )
}