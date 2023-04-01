export default function SideBar()
{
  return (
    <div className="w-11/12 mx-auto mt-8">
      <form className="flex flex-col"> 
        <h2 className="text-white text-2xl">Search</h2>
        <label for="title" className="mt-1 text-white">Title</label>
        <input type="text" id="title" placeholder="Title" className="my-1 p-1 rounded-sm"/>
        <label className="mt-1 text-white" for="genre">Genre</label>
        <select name="genre" id="genre" type="select" className="p-1 rounded-sm my-2">
          <option selected>--Select--</option>
          <option>action</option>
          <option>horror</option>
          <option>sci-fi</option>
          <option>comedy</option>
        </select>
        <label for="title" className="mt-1 text-white">Year</label>
        <input type="text" id="title" placeholder="Year" className="my-1 p-1 rounded-sm"/>
        <label className="mt-1 text-white" for="genre">Rating</label>
        <select name="genre" id="genre" type="select" className="p-1 rounded-sm my-2">
          <option selected>--Select--</option>
          <option>⭐️</option>
          <option>⭐️⭐️</option>
          <option>⭐️⭐️⭐️</option>
          <option>⭐️⭐️⭐️⭐️</option>
          <option>⭐️⭐️⭐️⭐️⭐️</option>
        </select>
        <button className="my-3 p-1 hover:bg-teal-400 bg-teal-500 rounded-sm text-white shadow-md">Search</button>
      </form>
    </div>
  )
}