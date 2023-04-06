import NavBar from "./NavBar"

export default function Layout({children})
{
  const year = new Date().getFullYear();

  return (
    <>
      <NavBar />
        {children}
      <footer className="text-white flex flex-col bg-teal-900 items-center justify-center h-32">
        <p>&copy; Bulls Movies {year}</p>
      </footer>
    </>
  )
}