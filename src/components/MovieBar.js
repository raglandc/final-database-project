export default function MovieBar({title, rating, overview})
{
  return (
    <div className="border rounded-md shadow-sm overflow-hidden m-auto w-10/12 my-2">
      <div className="flex p-4 bg-teal-900 justify-between">
        <h1 className="text-white text-2xl">{title}</h1>
        <div className="flex items-center">
          <p className="mx-2 text-white hover:text-green-500 hover:cursor-pointer">
            + watch list
          </p>
          <p className="text-white text-2xl">{rating}</p>
        </div>
      </div>
        <p className="p-4">{overview}</p>
    </div>
  )
}