const Listing = () => {
  return (
    // Container wrapper
    <div className="flex min-h-screen flex-col items-center bg-slate-50">
      {/* Form container */}
      <form className="mb-4 mt-8 flex min-h-screen w-full max-w-[750px] flex-col rounded-xl bg-white p-4 shadow-sm">
        {/* Header */}
        <div className="mb-6 flex justify-center">
          <h1 className="text-2xl font-semibold text-gray-900">
            Adding to the Collection
          </h1>
        </div>

        {/* Form fields */}
        <div className="space-y-4">
          {/* Title field */}
          <div className="title">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Add title:
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Image field */}
          <div className="image">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Add Image:
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Description field */}
          <div className="description">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Add description:
            </label>
            <textarea
              className="h-20 w-full resize-none rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your description here..."
            ></textarea>
          </div>

          {/* Review field */}
          <div className="review">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Add review:
            </label>
            <textarea
              className="h-20 w-full resize-none rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              placeholder="Enter your reviews here..."
            ></textarea>
          </div>

          {/* Old Price field */}
          <div className="oldPrice">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Add oldPrice:
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Price field */}
          <div className="price">
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Add price:
            </label>
            <input
              type="text"
              className="w-full rounded-md border border-gray-300 p-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-6 flex justify-center">
          <button className="w-full max-w-xs rounded-lg bg-black px-4 py-2 text-white transition-colors hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 sm:w-auto sm:px-8">
            Add item
          </button>
        </div>
      </form>
    </div>
  );
};

export default Listing;