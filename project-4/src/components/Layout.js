import NavBar from "./NavBar"

export default function Layout({children})
{
  const year = new Date().getFullYear();

  return (
    <>
      <NavBar />
        {children}
      <footer className="text-white flex flex-col items-center justify-center bg-teal-900 h-32">
        <p>&copy; Bulls Movies {year}</p>
      </footer>
    </>
  )
}