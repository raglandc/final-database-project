import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({link, title})
{
  const router = useRouter()
  return (
    <Link 
      href={`${link}`}
      className="px-3 h-full flex items-center rounded-sm hover:border-b-8 hover:border-b-green-500 hover:cursor-pointer"
    >
      {title}
    </Link>
  )

}