export default function SideBar()
{
  return (
    <div className="w-11/12 mx-auto mt-8 text-white">
      <form className="flex flex-col rounded-md px-5 py-5 m-auto"> 
        <h2 className="text-4xl my-3">Search</h2>
        <label for="title" className="mt-1 text-white">Title</label>
        <input type="text" id="title" placeholder="Title" className="border bg-transparent text-white my-1 p-3 rounded-sm"/>
        <label className="mt-1" for="genre">Genre</label>
        <select name="genre" id="genre" type="select" className="bg-transparent border p-3 rounded-sm my-2">
          <option selected>--Select--</option>
          <option>action</option>
          <option>horror</option>
          <option>sci-fi</option>
          <option>comedy</option>
        </select>
        <label for="title" className="mt-1 ">Year</label>
        <input type="text" id="title" placeholder="Year" className="my-1 bg-transparent border p-3 rounded-sm"/>
        <label className="mt-1" for="rating">Rating</label>
        <select name="rating" id="rating" type="select" className="p-3 bg-transparent border rounded-sm my-2">
          <option selected>--Select--</option>
          <option>⭐️</option>
          <option>⭐️⭐️</option>
          <option>⭐️⭐️⭐️</option>
          <option>⭐️⭐️⭐️⭐️</option>
          <option>⭐️⭐️⭐️⭐️⭐️</option>
        </select>
        <button className="my-3 p-3 hover:bg-teal-400 bg-teal-500 rounded-sm  shadow-md">Search</button>
      </form>
    </div>
  )
}