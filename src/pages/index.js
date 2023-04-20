import { signIn } from 'next-auth/react';

export default function Login()
{
  return (
    <div className="bg-teal-900 flex justify-center items-center h-screen relative">
      <div className="shadow-lg m-auto flex flex-col min-h-2/4 p-10 bg-white rounded-sm min-w-1/4">
        <h1 className="text-teal-600 font-bold text-7xl w-full">Bulls Movies</h1>
        <div className="my-5 text-stone-700 text-left w-full">
          <p className='text-3xl text-stone-700/70'>Your favorite movies</p>
          <p className='text-3xl text-stone-700/70'>All the time</p>
        </div>

        <button 
          onClick={() => signIn(undefined, {callbackUrl: "/recently-added"})}
          className="text-white px-3 py-2 bg-teal-600 rounded-md shadow-sm hover:bg-teal-700"
          >
          Login / Sign up
        </button>      
        </div>
      <div className="h-screen bg-login-hero-image w-2/4 bg-cover opacity-60" />
    </div>
  )
}