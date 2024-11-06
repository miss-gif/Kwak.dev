const test = () => {
  return (
    <div>
      {/* <!-- Before --> */}
      <button className="text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800">
        ...
      </button>

      {/* <!-- After --> */}
      <button className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3">
        ...
      </button>
    </div>
  )
}

export default test
