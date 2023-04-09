export default function SideBar()
{
  return (
    <div className="w-11/12 mx-auto mt-8 text-white">
      <form className="flex flex-col rounded-md px-5 py-5 m-auto"> 
        <h2 className="text-4xl my-3">Search</h2>
        <label for="title" className="mt-1 text-white">Title</label>
        <input type="text" id="title" placeholder="Title" className="bg-transparent text-white border-b-4 my-1 p-3 rounded-sm hover:border-green-600 hover:cursor-pointer"/>
        <label className="mt-1" htmlFor="genre">Genre</label>
        <select name="genre" id="genre" type="select" className="bg-transparent border-b-4 p-3 rounded-sm my-2 hover:border-green-600 hover:cursor-pointer active:border-green-600">
          <option selected>--Select--</option>
          <option>action</option>
          <option>horror</option>
          <option>sci-fi</option>
          <option>comedy</option>
        </select>
        <label htmlFor="year" className="mt-1 ">Year</label>
        <input type="text" id="year" placeholder="Year" className="my-1 bg-transparent hover:cursor-pointer border-b-4 p-3 rounded-sm hover:border-green-600"/>
        <label className="mt-1" htmlFor="rating">Rating</label>
        <select name="rating" id="rating" type="select" className="p-3 bg-transparent border-b-4 rounded-sm my-2 hover:cursor-pointer hover:border-green-600">
          <option selected>--Select--</option>
          <option>⭐️</option>
          <option>⭐️⭐️</option>
          <option>⭐️⭐️⭐️</option>
          <option>⭐️⭐️⭐️⭐️</option>
          <option>⭐️⭐️⭐️⭐️⭐️</option>
        </select>
        <button className="my-3 p-3 hover:bg-green-500 bg-green-600 rounded-sm  shadow-md">Search</button>
      </form>
    </div>
  )
}