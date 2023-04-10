import { signIn } from 'next-auth/react';
import prisma from '../../lib/prisma';

export default function Login()
{
  return (
    <div className="bg-teal-900 flex justify-center items-center h-screen relative">
      <div className="shadow-lg m-auto flex flex-col min-h-2/4 p-10 bg-white rounded-sm w-1/4 items-center">
        <h1 className="text-teal-600 text-6xl w-full">Bulls Movies</h1>
        <p className="my-5 text-stone-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem itaque ab harum aliquam ex assumenda natus aspernatur debitis laborum. Quos dicta et at molestiae amet exercitationem dignissimos deleniti eligendi.</p>

        <button 
          onClick={() => signIn(undefined, {callbackUrl: "/"})}
          className="text-white px-3 py-2 bg-teal-600 rounded-md shadow-sm hover:bg-teal-500 hover:scale-105 active:scale-95"
          >
          Login / Sign up
        </button>      
        </div>
      <div className="h-screen bg-login-hero-image w-2/4 bg-cover opacity-60" />
    </div>
  )
}

export const getServerSideProps = async () => {
  const feed = await prisma.post.findMany({
      where: { published: true },
      include: { author: true },
  })
  return {
      props: { feed },
  }
}