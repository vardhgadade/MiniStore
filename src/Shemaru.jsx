const ShimaruUi = () => {
  return (
    <div className="body p-6">
      <h1 className="mt-[100px] text-2xl font-bold">Loading...</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {[1, 2, 3, 4, 5, 6].map((_, index) => (
          <div
            key={index}
            className="border rounded-xl shadow-md overflow-hidden bg-white animate-pulse"
          >
            {/* Image placeholder */}
            <div className="h-40 bg-gray-300 w-full"></div>

            {/* Text placeholder */}
            <div className="p-4 space-y-2">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-300 rounded w-1/2"></div>
              
              <div className="flex justify-between mt-2">
                <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                <div className="h-4 bg-gray-300 rounded w-1/6"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimaruUi;
