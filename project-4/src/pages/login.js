export default function Login()
{
  return (
    <div className="bg-teal-900 flex justify-center items-center h-screen relative">
      <div className="shadow-lg m-auto flex flex-col min-h-2/4 px-9 py-8 bg-white rounded-md w-1/4 items-center">
        <h1 className="text-6xl mb-8">Bulls Movies</h1>
        <p className="my-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quidem itaque ab harum aliquam ex assumenda natus aspernatur debitis laborum. Quos dicta et at molestiae amet exercitationem dignissimos deleniti eligendi.</p>
        <button className="px-3 py-2 bg-teal-400 rounded-sm shadow-lg hover:bg-teal-300 hover:scale-105 active:scale-95">Login / Sign up</button>
      </div>
      <div className="h-screen bg-login-hero-image w-2/4 bg-cover opacity-80" />
    </div>
  )
}