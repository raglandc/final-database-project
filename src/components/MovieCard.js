export default function MovieCard({image, title, rating, overview})
{
  return (
    <div className="relative rounded-md shadow-sm w-full min-h-96 m-auto my-2">
      <div className="text-white absolute overflow-hidden -top-3 bg-teal-900 rounded-xl -right-2 w-20 flex justify-between">
        <button className="hover:bg-teal-800 w-2/4 px-3 py-2">❤️</button>
        <button className="hover:bg-teal-800 w-2/4 px-3 py-2">+</button>
      </div>
      <img
        alt={title}
        src={image}
        className="w-full h-10/12"
      />
      <div className="w-full p-4 bg-teal-900 h-2/12">
        <p className="text-white py-2">{title.length > 18 ? title.slice(0, 18) + "..." : title}</p>
      </div>
    </div>
  )
}